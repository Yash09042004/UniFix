#!/bin/bash
# Add Hacktoberfest Topic to GitHub Repository

echo "========== Adding Hacktoberfest Topic to GitHub Repository =========="

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "GitHub CLI (gh) is not installed. Installing it now..."
    sudo apt update && sudo apt install -y gh
    echo "GitHub CLI installation complete!"
fi

echo "Checking GitHub CLI authentication status..."
if ! gh auth status &> /dev/null; then
    echo "GitHub CLI is not authenticated. Please authenticate first:"
    echo "Run: gh auth login"
    echo "Follow the prompts to authenticate with your GitHub account."
    exit 1
fi

echo "Authenticated successfully!"

# Get current directory name as potential repo name
current_dir=$(basename "$(pwd)")
echo "Current directory: $current_dir"

# Let user specify repository or use current directory
read -p "Enter repository name (owner/repo format) or press Enter to use current directory repo: " repo_input

if [ -z "$repo_input" ]; then
    # Try to get repo info from git remote
    if git remote -v &> /dev/null; then
        repo_url=$(git remote get-url origin 2>/dev/null || echo "")
        if [[ $repo_url =~ github\.com[:/]([^/]+/[^/]+)(\.git)?$ ]]; then
            repo_name="${BASH_REMATCH[1]%.git}"
            echo "Detected repository: $repo_name"
        else
            echo "Could not detect GitHub repository from git remote."
            read -p "Please enter repository name (owner/repo format): " repo_name
        fi
    else
        echo "Not in a git repository."
        read -p "Please enter repository name (owner/repo format): " repo_name
    fi
else
    repo_name="$repo_input"
fi

if [ -z "$repo_name" ]; then
    echo "Error: Repository name is required."
    exit 1
fi

echo "Working with repository: $repo_name"

# Get current topics
echo "Fetching current repository topics..."
current_topics=$(gh repo view "$repo_name" --json topics -q '.topics[]' 2>/dev/null | tr '\n' ' ')

if [ $? -eq 0 ]; then
    echo "Current topics: $current_topics"
    
    # Check if hacktoberfest topic already exists
    if echo "$current_topics" | grep -q "hacktoberfest"; then
        echo "✅ 'hacktoberfest' topic is already added to the repository!"
        exit 0
    fi
else
    echo "Warning: Could not fetch current topics. Proceeding anyway..."
    current_topics=""
fi

# Add hacktoberfest topic
echo "Adding 'hacktoberfest' topic to repository..."

# Create the topics array including existing topics
topics_array=($current_topics "hacktoberfest")

# Remove duplicates and create comma-separated list
topics_list=$(printf '%s\n' "${topics_array[@]}" | sort -u | tr '\n' ',' | sed 's/,$//')

# Add the topics using GitHub CLI
if gh repo edit "$repo_name" --add-topic hacktoberfest; then
    echo "✅ Successfully added 'hacktoberfest' topic to repository!"
    echo ""
    echo "🎉 Your repository is now ready for Hacktoberfest!"
    echo "📋 Make sure your repository also:"
    echo "   - Has clear contribution guidelines"
    echo "   - Labels issues appropriately (e.g., 'good first issue', 'help wanted')"
    echo "   - Has a detailed README.md"
    echo "   - Welcomes first-time contributors"
    echo ""
    echo "🔗 Learn more about Hacktoberfest: https://hacktoberfest.com"
else
    echo "❌ Failed to add 'hacktoberfest' topic to repository."
    echo "Please check:"
    echo "   - Repository name is correct: $repo_name"
    echo "   - You have admin/write access to the repository"
    echo "   - GitHub CLI is properly authenticated"
    exit 1
fi

# Optional: Show updated topics
echo ""
echo "Fetching updated repository topics..."
updated_topics=$(gh repo view "$repo_name" --json topics -q '.topics[]' 2>/dev/null | tr '\n' ' ')
if [ $? -eq 0 ]; then
    echo "Updated topics: $updated_topics"
fi

echo ""
echo "========== Hacktoberfest Topic Setup Complete =========="