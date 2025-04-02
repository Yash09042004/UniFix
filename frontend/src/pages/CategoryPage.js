import { useParams } from "react-router-dom";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { category } = useParams();

  // All scripts for all categories
  const allScripts = {
    memory: [
      {
        name: "Cleanop",
        description: "Cleanop command cleans unnecessary memory and frees up space.",
        downloadLink: "/scripts/cleanop.sh",
      },
      {
        name: "MemoryCheck",
        description: "Checks memory usage and provides a detailed report.",
        downloadLink: "/scripts/MemoryCheck.sh",
      },
      {
        name: "SwapCleaner",
        description: "Clears swap memory to free up system resources.",
        downloadLink: "/scripts/SwapCleaner.sh",
      },
      {
        name: "CacheClear",
        description: "Clears system cache to free up memory.",
        downloadLink: "/scripts/CacheClear.sh",
      },
      {
        name: "OOMKillerAnalyzer",
        description: "Analyzes Out-Of-Memory (OOM) killer logs.",
        downloadLink: "/scripts/OOMKillerAnalyzer.sh",
      },
      {
        name: "ProcessKiller",
        description: "Identifies and kills memory-hogging processes.",
        downloadLink: "/scripts/ProcessKiller.sh",
      },
      {
        name: "MemoryOptimizer",
        description: "Optimizes memory usage by adjusting system parameters.",
        downloadLink: "/scripts/MemoryOptimizer.sh",
      },
      {
        name: "LogCleaner",
        description: "Cleans up old log files to free up disk space.",
        downloadLink: "/scripts/LogCleaner.sh",
      },
      {
        name: "TmpCleaner",
        description: "Cleans up temporary files to free up memory.",
        downloadLink: "/scripts/TmpCleaner.sh",
      },
      {
        name: "MemoryLeakDetector",
        description: "Detects memory leaks in running processes.",
        downloadLink: "/scripts/MemoryLeakDetector.sh",
      },
      {
        name: "SwapEnabler",
        description: "Enables and configures swap memory.",
        downloadLink: "/scripts/SwapEnabler.sh",
      },
      {
        name: "HugePagesOptimizer",
        description: "Configures HugePages for better memory management.",
        downloadLink: "/scripts/HugePagesOptimizer.sh",
      },
      {
        name: "MemoryUsageLogger",
        description: "Logs memory usage over time for analysis.",
        downloadLink: "/scripts/MemoryUsageLogger.sh",
      },
      {
        name: "KernelMemoryCleaner",
        description: "Cleans up unused kernel memory.",
        downloadLink: "/scripts/KernelMemoryCleaner.sh",
      },
      {
        name: "ZRAMEnabler",
        description: "Enables ZRAM for better memory compression.",
        downloadLink: "/scripts/ZRAMEnabler.sh",
      },
      {
        name: "MemoryStressTest",
        description: "Tests system memory for stability under load.",
        downloadLink: "/scripts/MemoryStressTest.sh",
      },
      {
        name: "PageCacheCleaner",
        description: "Clears page cache to free up memory.",
        downloadLink: "/scripts/PageCacheCleaner.sh",
      },
      {
        name: "MemoryInfo",
        description: "Displays detailed memory information.",
        downloadLink: "/scripts/MemoryInfo.sh",
      },
      {
        name: "SwapUsageLogger",
        description: "Logs swap usage over time for analysis.",
        downloadLink: "/scripts/SwapUsageLogger.sh",
      },
      {
        name: "MemoryHealthCheck",
        description: "Performs a health check on system memory.",
        downloadLink: "/scripts/MemoryHealthCheck.sh",
      },
    ],
    labs: [
      {
        name: "All Databse",
        description: "Run the databse of your choice",
        downloadLink: "/scripts/LabSetup.sh",
      },
      {
        name: "Lab Cleanup",
        description: "Cleans up the lab environment.",
        downloadLink: "/scripts/LabCleanup.sh",
      },
      {
        name: "Lab Backup",
        description: "Creates a backup of the lab environment.",
        downloadLink: "/scripts/LabBackup.sh",
      },
      {
        name: "Lab Restore",
        description: "Restores the lab environment from a backup.",
        downloadLink: "/scripts/LabRestore.sh",
      },
      {
        name: "Database Backup",
        description: "Creates a backup of your SQL database.",
        downloadLink: "/scripts/BackupSQL.sh",
      },
      {
        name: "Java Runner",
        description: "Compiles and runs Java programs.",
        downloadLink: "/scripts/Javarun.sh",
      },
      {
        name: "OpenMP Runner",
        description: "Compiles and runs OpenMP programs.",
        downloadLink: "/scripts/OpenmpRun.sh",
      },
      {
        name: "Emulator Runner",
        description: "Runs an emulator for testing purposes.",
        downloadLink: "/scripts/Emulatorrun.sh",
      },
      {
        name: "Ping Server",
        description: "Pings a server to check connectivity.",
        downloadLink: "/scripts/Pingserver.sh",
      },
      {
        name: "Resource Usage Monitor",
        description: "Monitors system resource usage.",
        downloadLink: "/scripts/ResUsage.sh",
      },
      {
        name: "OpenCV Installer",
        description: "Installs OpenCV for image processing.",
        downloadLink: "/scripts/OpencvInstall.sh",
      },
      {
        name: "Python Runner",
        description: "Runs Python scripts.",
        downloadLink: "/scripts/RunPython.sh",
      },
      {
        name: "C++ Runner",
        description: "Compiles and runs C++ programs.",
        downloadLink: "/scripts/RunCpp.sh",
      },
      {
        name: "MPI Runner",
        description: "Compiles and runs MPI programs.",
        downloadLink: "/scripts/RunMPI.sh",
      },
      {
        name: "Image Resizer",
        description: "Resizes images using Python (Pillow).",
        downloadLink: "/scripts/Resizeimg.sh",
      },
    ],
    drivers: [
        {
          name: "Check NVIDIA Driver Installation",
          description: "Checks if NVIDIA drivers are installed correctly.",
          downloadLink: "/scripts/Check_NVIDIA_Driver_Installation.sh",
        },
        {
          name: "Install AMD Graphics Driver",
          description: "Installs AMD graphics drivers.",
          downloadLink: "/scripts/Install_AMD_Graphics_Driver.sh",
        },
        {
          name: "Install Realtek WiFi Drivers",
          description: "Installs Realtek WiFi drivers.",
          downloadLink: "/scripts/Install_Realtek_WiFi_Drivers.sh",
        },
        {
          name: "Install Broadcom WiFi Driver",
          description: "Installs Broadcom WiFi drivers.",
          downloadLink: "/scripts/Install_Broadcom_WiFi_Driver.sh",
        },
        {
          name: "Install USB 3.0 Drivers",
          description: "Installs USB 3.0 drivers.",
          downloadLink: "/scripts/Install_USB_3_0_Drivers.sh",
        },
        {
          name: "Install ALSA Audio Drivers",
          description: "Installs ALSA audio drivers.",
          downloadLink: "/scripts/Install_ALSA_Audio_Drivers.sh",
        },
        {
          name: "Check Audio Driver Installation Status",
          description: "Checks the status of audio driver installation.",
          downloadLink: "/scripts/Check_Audio_Driver_Installation_Status.sh",
        },
        {
          name: "Reinstall Ethernet Drivers",
          description: "Reinstalls Ethernet drivers.",
          downloadLink: "/scripts/Reinstall_Ethernet_Drivers.sh",
        },
        {
          name: "Install Printer Drivers (CUPS)",
          description: "Installs printer drivers using CUPS.",
          downloadLink: "/scripts/Install_Printer_Drivers_CUPS.sh",
        },
        {
          name: "Check and Fix NVIDIA Driver Issues",
          description: "Checks and fixes common NVIDIA driver issues.",
          downloadLink: "/scripts/Check_and_Fix_NVIDIA_Driver_Issues.sh",
        },
        {
          name: "Install VirtualBox Drivers",
          description: "Installs VirtualBox drivers.",
          downloadLink: "/scripts/Install_VirtualBox_Drivers.sh",
        },
        {
          name: "Install NVIDIA CUDA Toolkit",
          description: "Installs the NVIDIA CUDA toolkit.",
          downloadLink: "/scripts/Install_NVIDIA_CUDA_Toolkit.sh",
        },
        {
          name: "Install Intel Wireless Drivers",
          description: "Installs Intel wireless drivers.",
          downloadLink: "/scripts/Install_Intel_Wireless_Drivers.sh",
        },
        {
          name: "Install Bluetooth Drivers",
          description: "Installs Bluetooth drivers.",
          downloadLink: "/scripts/Install_Bluetooth_Drivers.sh",
        },
        {
          name: "Check Graphics Driver Installation",
          description: "Checks if graphics drivers are installed correctly.",
          downloadLink: "/scripts/Check_Graphics_Driver_Installation.sh",
        },
        {
          name: "Install NVIDIA Optimus Driver",
          description: "Installs NVIDIA Optimus drivers.",
          downloadLink: "/scripts/Install_NVIDIA_Optimus_Driver.sh",
        },
        {
          name: "Install NVIDIA Hybrid Graphics Driver",
          description: "Installs NVIDIA hybrid graphics drivers.",
          downloadLink: "/scripts/Install_NVIDIA_Hybrid_Graphics_Driver.sh",
        },
        {
          name: "Install VirtualBox Guest Additions",
          description: "Installs VirtualBox Guest Additions.",
          downloadLink: "/scripts/Install_VirtualBox_Guest_Additions.sh",
        },
        {
          name: "Install Docker",
          description: "Installs Docker on the system.",
          downloadLink: "/scripts/Install_Docker.sh",
        },
        {
          name: "Update Kernel to Resolve Driver Issues",
          description: "Updates the kernel to resolve driver-related issues.",
          downloadLink: "/scripts/Update_Kernel_to_Resolve_Driver_Issues.sh",
        },
        {
          name: "Install OpenCL Drivers for AMD",
          description: "Installs OpenCL drivers for AMD GPUs.",
          downloadLink: "/scripts/Install_OpenCL_Drivers_for_AMD.sh",
        },
        {
          name: "Check and Fix USB Driver Issues",
          description: "Checks and fixes common USB driver issues.",
          downloadLink: "/scripts/Check_and_Fix_USB_Driver_Issues.sh",
        },
        {
          name: "Install Android USB Drivers",
          description: "Installs USB drivers for Android devices.",
          downloadLink: "/scripts/Install_Android_USB_Drivers.sh",
        },
        {
          name: "Install Raspberry Pi GPU Driver",
          description: "Installs GPU drivers for Raspberry Pi.",
          downloadLink: "/scripts/Install_Raspberry_Pi_GPU_Driver.sh",
        },
    ],
    tools: [
      {
        name: "Install Git",
        description: "Installs Git version control system.",
        downloadLink: "/scripts/Install_Git.sh",
      },
      {
        name: "Update NPM",
        description: "Updates Node Package Manager (NPM) to the latest version.",
        downloadLink: "/scripts/Update_NPM.sh",
      },
      {
        name: "Install Docker",
        description: "Installs Docker on the system.",
        downloadLink: "/scripts/Install_Docker.sh",
      },
      {
        name: "Install Apache Web Server",
        description: "Installs Apache HTTP server.",
        downloadLink: "/scripts/Install_Apache_Web_Server.sh",
      },
      {
        name: "Install MySQL",
        description: "Installs MySQL database server.",
        downloadLink: "/scripts/Install_MySQL.sh",
      },
      {
        name: "Install Node.js",
        description: "Installs Node.js runtime environment.",
        downloadLink: "/scripts/Install_Nodejs.sh",
      },
      {
        name: "Install Python3 and PIP",
        description: "Installs Python3 and its package manager PIP.",
        downloadLink: "/scripts/Install_Python3_and_PIP.sh",
      },
      {
        name: "Install JDK",
        description: "Installs Java Development Kit (JDK).",
        downloadLink: "/scripts/Install_JDK.sh",
      },
      {
        name: "Install PostgreSQL",
        description: "Installs PostgreSQL database server.",
        downloadLink: "/scripts/Install_PostgreSQL.sh",
      },
      {
        name: "Install Redis",
        description: "Installs Redis in-memory data structure store.",
        downloadLink: "/scripts/Install_Redis.sh",
      },
      {
        name: "Install Docker Compose",
        description: "Installs Docker Compose for managing multi-container applications.",
        downloadLink: "/scripts/Install_Docker_Compose.sh",
      },
      {
        name: "Install VIM",
        description: "Installs VIM text editor.",
        downloadLink: "/scripts/Install_VIM.sh",
      },
      {
        name: "Install CURL",
        description: "Installs CURL command-line tool for transferring data.",
        downloadLink: "/scripts/Install_CURL.sh",
      },
      {
        name: "Install ZSH Shell",
        description: "Installs ZSH shell for enhanced terminal experience.",
        downloadLink: "/scripts/Install_ZSH_Shell.sh",
      },
      {
        name: "Install Git LFS",
        description: "Installs Git Large File Storage (LFS) extension.",
        downloadLink: "/scripts/Install_GIT_LFS.sh",
      },
      {
        name: "Install MongoDB",
        description: "Installs MongoDB NoSQL database.",
        downloadLink: "/scripts/Install_MongoDB.sh",
      },
      {
        name: "Install Nginx Web Server",
        description: "Installs Nginx web server.",
        downloadLink: "/scripts/Install_Nginx_Web_Server.sh",
      },
      {
        name: "Install FFmpeg",
        description: "Installs FFmpeg for multimedia processing.",
        downloadLink: "/scripts/Install_ffmpeg.sh",
      },
      {
        name: "Install Maven",
        description: "Installs Apache Maven build automation tool.",
        downloadLink: "/scripts/Install_Maven.sh",
      },
      {
        name: "Install GitHub CLI",
        description: "Installs GitHub CLI for managing GitHub repositories.",
        downloadLink: "/scripts/Install_GitHub_CLI.sh",
      },
    ],
    softwares: [
      {
        name: "Install Visual Studio Code",
        description: "Installs Visual Studio Code IDE.",
        downloadLink: "/scripts/Install_Visual_Studio_Code.sh",
      },
      {
        name: "Install Google Chrome",
        description: "Installs Google Chrome browser.",
        downloadLink: "/scripts/Install_Google_Chrome.sh",
      },
      {
        name: "Install Firefox",
        description: "Installs Mozilla Firefox browser.",
        downloadLink: "/scripts/Install_Firefox.sh",
      },
      {
        name: "Install Node.js",
        description: "Installs Node.js runtime environment.",
        downloadLink: "/scripts/Install_Nodejs.sh",
      },
      {
        name: "Install NPM",
        description: "Installs Node Package Manager (NPM).",
        downloadLink: "/scripts/Install_NPM.sh",
      },
      {
        name: "Install Docker",
        description: "Installs Docker for containerization.",
        downloadLink: "/scripts/Install_Docker.sh",
      },
      {
        name: "Install Git",
        description: "Installs Git version control system.",
        downloadLink: "/scripts/Install_Git.sh",
      },
      {
        name: "Install Python3",
        description: "Installs Python3 programming language.",
        downloadLink: "/scripts/Install_Python3.sh",
      },
      {
        name: "Install PIP",
        description: "Installs Python package manager PIP.",
        downloadLink: "/scripts/Install_PIP.sh",
      },
      {
        name: "Install JDK",
        description: "Installs Java Development Kit (JDK).",
        downloadLink: "/scripts/Install_JDK.sh",
      },
      {
        name: "Install Apache",
        description: "Installs Apache HTTP server.",
        downloadLink: "/scripts/Install_Apache.sh",
      },
      {
        name: "Install MySQL",
        description: "Installs MySQL database server.",
        downloadLink: "/scripts/Install_MySQL.sh",
      },
      {
        name: "Install PostgreSQL",
        description: "Installs PostgreSQL database server.",
        downloadLink: "/scripts/Install_PostgreSQL.sh",
      },
      {
        name: "Install Redis",
        description: "Installs Redis in-memory data structure store.",
        downloadLink: "/scripts/Install_Redis.sh",
      },
      {
        name: "Install MongoDB",
        description: "Installs MongoDB NoSQL database.",
        downloadLink: "/scripts/Install_MongoDB.sh",
      },
      {
        name: "Install Slack",
        description: "Installs Slack communication tool.",
        downloadLink: "/scripts/Install_Slack.sh",
      },
      {
        name: "Install Visual Studio",
        description: "Installs Visual Studio IDE.",
        downloadLink: "/scripts/Install_Visual_Studio.sh",
      },
      {
        name: "Install Zoom",
        description: "Installs Zoom video conferencing software.",
        downloadLink: "/scripts/Install_Zoom.sh",
      },
      {
        name: "Install VIM",
        description: "Installs VIM text editor.",
        downloadLink: "/scripts/Install_VIM.sh",
      },
      {
        name: "Install FFmpeg",
        description: "Installs FFmpeg for multimedia processing.",
        downloadLink: "/scripts/Install_FFmpeg.sh",
      },
    ],
    docker: [
      {
        name: "Install Docker",
        description: "Installs Docker on the system.",
        downloadLink: "/scripts/Install_Docker.sh",
      },
      {
        name: "Start Docker",
        description: "Starts the Docker service.",
        downloadLink: "/scripts/Start_Docker.sh",
      },
      {
        name: "Enable Docker on Boot",
        description: "Enables Docker to start on system boot.",
        downloadLink: "/scripts/Enable_Docker_on_Boot.sh",
      },
      {
        name: "Check Docker Version",
        description: "Checks the installed Docker version.",
        downloadLink: "/scripts/Check_Docker_Version.sh",
      },
      {
        name: "Restart Docker",
        description: "Restarts the Docker service.",
        downloadLink: "/scripts/Restart_Docker.sh",
      },
      {
        name: "Uninstall Docker",
        description: "Uninstalls Docker from the system.",
        downloadLink: "/scripts/Uninstall_Docker.sh",
      },
      {
        name: "Docker System Prune",
        description: "Cleans up unused Docker data.",
        downloadLink: "/scripts/Docker_System_Prune.sh",
      },
      {
        name: "Check Docker Service Status",
        description: "Checks the status of the Docker service.",
        downloadLink: "/scripts/Check_Docker_Service_Status.sh",
      },
      {
        name: "Docker Disk Usage",
        description: "Displays Docker disk usage statistics.",
        downloadLink: "/scripts/Docker_Disk_Usage.sh",
      },
      {
        name: "Reinstall Docker",
        description: "Reinstalls Docker on the system.",
        downloadLink: "/scripts/Reinstall_Docker.sh",
      },
    ],
    networking: [
      {
        name: "Check Network Interfaces",
        description: "Lists all network interfaces.",
        downloadLink: "/scripts/Check_Network_Interfaces.sh",
      },
      {
        name: "Restart Network Service",
        description: "Restarts the network service.",
        downloadLink: "/scripts/Restart_Network_Service.sh",
      },
      {
        name: "Check Internet Connectivity",
        description: "Checks internet connectivity using ping.",
        downloadLink: "/scripts/Check_Internet_Connectivity.sh",
      },
      {
        name: "Flush DNS Cache",
        description: "Flushes the DNS cache.",
        downloadLink: "/scripts/Flush_DNS_Cache.sh",
      },
      {
        name: "Display Routing Table",
        description: "Displays the current routing table.",
        downloadLink: "/scripts/Display_Routing_Table.sh",
      },
      {
        name: "Reset Network Settings",
        description: "Resets network settings and removes saved connections.",
        downloadLink: "/scripts/Reset_Network_Settings.sh",
      },
      {
        name: "Restart Wi-Fi Adapter",
        description: "Restarts the Wi-Fi adapter.",
        downloadLink: "/scripts/Restart_WiFi_Adapter.sh",
      },
      {
        name: "Check Open Network Ports",
        description: "Checks open network ports using netstat.",
        downloadLink: "/scripts/Check_Open_Network_Ports.sh",
      },
      {
        name: "Test DNS Resolution",
        description: "Tests DNS resolution using nslookup.",
        downloadLink: "/scripts/Test_DNS_Resolution.sh",
      },
      {
        name: "Restart Networking Stack",
        description: "Restarts the networking stack.",
        downloadLink: "/scripts/Restart_Networking_Stack.sh",
      },
    ],
    'cloud computing': [
      {
        name: "Check Cloud Service Status",
        description: "Checks the status of cloud services.",
        downloadLink: "/scripts/Check_Cloud_Service_Status.sh",
      },
      {
        name: "Start Cloud Instance",
        description: "Starts a cloud instance.",
        downloadLink: "/scripts/Start_Cloud_Instance.sh",
      },
      {
        name: "Stop Cloud Instance",
        description: "Stops a cloud instance.",
        downloadLink: "/scripts/Stop_Cloud_Instance.sh",
      },
      {
        name: "Restart Cloud Instance",
        description: "Restarts a cloud instance.",
        downloadLink: "/scripts/Restart_Cloud_Instance.sh",
      },
      {
        name: "Create Cloud Instance",
        description: "Creates a new cloud instance.",
        downloadLink: "/scripts/Create_Cloud_Instance.sh",
      },
      {
        name: "Terminate Cloud Instance",
        description: "Terminates a cloud instance.",
        downloadLink: "/scripts/Terminate_Cloud_Instance.sh",
      },
      {
        name: "Check Cloud Instance Logs",
        description: "Checks logs of a cloud instance.",
        downloadLink: "/scripts/Check_Cloud_Instance_Logs.sh",
      },
      {
        name: "Monitor Cloud Resource Usage",
        description: "Monitors cloud resource usage.",
        downloadLink: "/scripts/Monitor_Cloud_Resource_Usage.sh",
      },
      {
        name: "Update Cloud Instance",
        description: "Updates a cloud instance.",
        downloadLink: "/scripts/Update_Cloud_Instance.sh",
      },
      {
        name: "Check Cloud Storage Usage",
        description: "Checks cloud storage usage.",
        downloadLink: "/scripts/Check_Cloud_Storage_Usage.sh",
      },
      {
        name: "Sync Local Folder to Cloud",
        description: "Syncs a local folder to cloud storage.",
        downloadLink: "/scripts/Sync_Local_Folder_to_Cloud.sh",
      },
      {
        name: "Sync Cloud Folder to Local",
        description: "Syncs a cloud folder to a local folder.",
        downloadLink: "/scripts/Sync_Cloud_Folder_to_Local.sh",
      },
      {
        name: "Backup Cloud Storage",
        description: "Backs up cloud storage.",
        downloadLink: "/scripts/Backup_Cloud_Storage.sh",
      },
      {
        name: "Restore Cloud Storage",
        description: "Restores cloud storage from a backup.",
        downloadLink: "/scripts/Restore_Cloud_Storage.sh",
      },
      {
        name: "Check Cloud VPC Status",
        description: "Checks the status of cloud VPCs.",
        downloadLink: "/scripts/Check_Cloud_VPC_Status.sh",
      },
      {
        name: "Deploy Application on Cloud",
        description: "Deploys an application on the cloud.",
        downloadLink: "/scripts/Deploy_Application_on_Cloud.sh",
      },
      {
        name: "Scale Cloud Instance",
        description: "Scales a cloud instance.",
        downloadLink: "/scripts/Scale_Cloud_Instance.sh",
      },
      {
        name: "Configure Cloud Security Group",
        description: "Configures a cloud security group.",
        downloadLink: "/scripts/Configure_Cloud_Security_Group.sh",
      },
      {
        name: "List Cloud Volumes",
        description: "Lists all cloud volumes.",
        downloadLink: "/scripts/List_Cloud_Volumes.sh",
      },
      {
        name: "Resize Cloud Volume",
        description: "Resizes a cloud volume.",
        downloadLink: "/scripts/Resize_Cloud_Volume.sh",
      },
    ],
    cybersecurity: [
      {
        name: "Check Open Ports",
        description: "Checks open ports.",
        downloadLink: "/scripts/Check_Open_Ports.sh",
      },
      {
        name: "Check System Logs",
        description: "Checks system logs for suspicious activity.",
        downloadLink: "/scripts/Check_System_Logs.sh",
      },
      {
        name: "Update Security Patches",
        description: "Updates system and applies security patches.",
        downloadLink: "/scripts/Update_Security_Patches.sh",
      },
      {
        name: "Check Firewall Status",
        description: "Checks the status of the firewall.",
        downloadLink: "/scripts/Check_Firewall_Status.sh",
      },
      {
        name: "Enable Firewall",
        description: "Enables the firewall.",
        downloadLink: "/scripts/Enable_Firewall.sh",
      },
      {
        name: "Disable Firewall",
        description: "Disables the firewall.",
        downloadLink: "/scripts/Disable_Firewall.sh",
      },
      {
        name: "List Active User Sessions",
        description: "Lists all active user sessions.",
        downloadLink: "/scripts/List_Active_User_Sessions.sh",
      },
      {
        name: "Change User Password",
        description: "Changes the password of the current user.",
        downloadLink: "/scripts/Change_User_Password.sh",
      },
      {
        name: "Check Suspicious Processes",
        description: "Checks for suspicious processes running on the system.",
        downloadLink: "/scripts/Check_Suspicious_Processes.sh",
      },
      {
        name: "Check File Permissions",
        description: "Checks file permissions in a specified directory.",
        downloadLink: "/scripts/Check_File_Permissions.sh",
      },
      {
        name: "Scan System for Malware",
        description: "Scans the system for malware.",
        downloadLink: "/scripts/Scan_System_for_Malware.sh",
      },
      {
        name: "Check for Rootkits",
        description: "Checks the system for rootkits.",
        downloadLink: "/scripts/Check_for_Rootkits.sh",
      },
      {
        name: "Monitor System for Intrusions",
        description: "Monitors the system for intrusions.",
        downloadLink: "/scripts/Monitor_System_for_Intrusions.sh",
      },
      {
        name: "Enable SELinux",
        description: "Enables SELinux on the system.",
        downloadLink: "/scripts/Enable_SELinux.sh",
      },
      {
        name: "Disable SELinux",
        description: "Disables SELinux on the system.",
        downloadLink: "/scripts/Disable_SELinux.sh",
      },
      {
        name: "Install and Update Antivirus",
        description: "Installs and updates antivirus software.",
        downloadLink: "/scripts/Install_Update_Antivirus.sh",
      },
      {
        name: "Check System Integrity",
        description: "Checks the integrity of the system.",
        downloadLink: "/scripts/Check_System_Integrity.sh",
      },
      {
        name: "Monitor Network Traffic",
        description: "Monitors network traffic.",
        downloadLink: "/scripts/Monitor_Network_Traffic.sh",
      },
      {
        name: "Backup Critical Files",
        description: "Backs up critical files.",
        downloadLink: "/scripts/Backup_Critical_Files.sh",
      },
      {
        name: "Setup Two-Factor Authentication (2FA)",
        description: "Sets up two-factor authentication for the system.",
        downloadLink: "/scripts/Setup_2FA.sh",
      },
    ],
    'artificial intelligence': [
      {
        name: "Install TensorFlow",
        description: "Installs TensorFlow library for machine learning.",
        downloadLink: "/scripts/Install_TensorFlow.sh",
      },
      {
        name: "Install PyTorch",
        description: "Installs PyTorch library for deep learning.",
        downloadLink: "/scripts/Install_PyTorch.sh",
      },
      {
        name: "Install Scikit-learn",
        description: "Installs Scikit-learn library for machine learning.",
        downloadLink: "/scripts/Install_Scikit_learn.sh",
      },
      {
        name: "Install Keras",
        description: "Installs Keras library for deep learning.",
        downloadLink: "/scripts/Install_Keras.sh",
      },
      {
        name: "Install OpenCV",
        description: "Installs OpenCV library for computer vision.",
        downloadLink: "/scripts/Install_OpenCV.sh",
      },
      {
        name: "Install NLTK",
        description: "Installs NLTK library for natural language processing.",
        downloadLink: "/scripts/Install_NLTK.sh",
      },
      {
        name: "Install Pandas",
        description: "Installs Pandas library for data manipulation.",
        downloadLink: "/scripts/Install_Pandas.sh",
      },
      {
        name: "Install NumPy",
        description: "Installs NumPy library for numerical computing.",
        downloadLink: "/scripts/Install_NumPy.sh",
      },
      {
        name: "Install Matplotlib",
        description: "Installs Matplotlib library for data visualization.",
        downloadLink: "/scripts/Install_Matplotlib.sh",
      },
      {
        name: "Install Jupyter Notebook",
        description: "Installs Jupyter Notebook for interactive coding.",
        downloadLink: "/scripts/Install_Jupyter_Notebook.sh",
      },
      {
        name: "Install SpaCy",
        description: "Installs SpaCy library for natural language processing.",
        downloadLink: "/scripts/Install_SpaCy.sh",
      },
      {
        name: "Check TensorFlow Version",
        description: "Checks the installed version of TensorFlow.",
        downloadLink: "/scripts/Check_TensorFlow_Version.sh",
      },
      {
        name: "Check PyTorch Version",
        description: "Checks the installed version of PyTorch.",
        downloadLink: "/scripts/Check_PyTorch_Version.sh",
      },
      {
        name: "Run Basic TensorFlow Script",
        description: "Runs a basic TensorFlow script.",
        downloadLink: "/scripts/Run_Basic_TensorFlow_Script.sh",
      },
      {
        name: "Run Basic PyTorch Script",
        description: "Runs a basic PyTorch script.",
        downloadLink: "/scripts/Run_Basic_PyTorch_Script.sh",
      },
      {
        name: "Train Scikit-learn Model",
        description: "Trains a machine learning model using Scikit-learn.",
        downloadLink: "/scripts/Train_Scikit_Learn_Model.sh",
      },
      {
        name: "Create Basic Keras Neural Network",
        description: "Creates a basic neural network using Keras.",
        downloadLink: "/scripts/Create_Basic_Keras_Neural_Network.sh",
      },
      {
        name: "Run OpenCV Computer Vision Script",
        description: "Runs a basic computer vision script using OpenCV.",
        downloadLink: "/scripts/Run_OpenCV_Computer_Vision.sh",
      },
      {
        name: "Run SpaCy NLP Script",
        description: "Runs a natural language processing script using SpaCy.",
        downloadLink: "/scripts/Run_SpaCy_NLP_Script.sh",
      },
      {
        name: "Visualize Data with Matplotlib",
        description: "Visualizes data using Matplotlib.",
        downloadLink: "/scripts/Visualize_Data_With_Matplotlib.sh",
      },
    ],
    'data science': [
      {
        name: "Install Pandas",
        description: "Installs Pandas library for data manipulation.",
        downloadLink: "/scripts/Install_Pandas.sh",
      },
      {
        name: "Install NumPy",
        description: "Installs NumPy library for numerical computing.",
        downloadLink: "/scripts/Install_NumPy.sh",
      },
      {
        name: "Install Matplotlib",
        description: "Installs Matplotlib library for data visualization.",
        downloadLink: "/scripts/Install_Matplotlib.sh",
      },
      {
        name: "Install Seaborn",
        description: "Installs Seaborn library for statistical data visualization.",
        downloadLink: "/scripts/Install_Seaborn.sh",
      },
      {
        name: "Install Scikit-learn",
        description: "Installs Scikit-learn library for machine learning.",
        downloadLink: "/scripts/Install_Scikit_learn.sh",
      },
      {
        name: "Install Statsmodels",
        description: "Installs Statsmodels library for statistical modeling.",
        downloadLink: "/scripts/Install_Statsmodels.sh",
      },
      {
        name: "Install Jupyter Notebook",
        description: "Installs Jupyter Notebook for interactive coding.",
        downloadLink: "/scripts/Install_Jupyter_Notebook.sh",
      },
      {
        name: "Install SciPy",
        description: "Installs SciPy library for scientific computing.",
        downloadLink: "/scripts/Install_SciPy.sh",
      },
      {
        name: "Install Plotly",
        description: "Installs Plotly library for interactive data visualization.",
        downloadLink: "/scripts/Install_Plotly.sh",
      },
      {
        name: "Install TensorFlow",
        description: "Installs TensorFlow library for machine learning.",
        downloadLink: "/scripts/Install_TensorFlow.sh",
      },
      {
        name: "Install PyTorch",
        description: "Installs PyTorch library for deep learning.",
        downloadLink: "/scripts/Install_PyTorch.sh",
      },
      {
        name: "Check Pandas Version",
        description: "Checks the installed version of Pandas.",
        downloadLink: "/scripts/Check_Pandas_Version.sh",
      },
      {
        name: "Check NumPy Version",
        description: "Checks the installed version of NumPy.",
        downloadLink: "/scripts/Check_NumPy_Version.sh",
      },
      {
        name: "Check Matplotlib Version",
        description: "Checks the installed version of Matplotlib.",
        downloadLink: "/scripts/Check_Matplotlib_Version.sh",
      },
      {
        name: "Check Scikit-learn Version",
        description: "Checks the installed version of Scikit-learn.",
        downloadLink: "/scripts/Check_Scikit_learn_Version.sh",
      },
      {
        name: "Check Jupyter Notebook Version",
        description: "Checks the installed version of Jupyter Notebook.",
        downloadLink: "/scripts/Check_Jupyter_Notebook_Version.sh",
      },
      {
        name: "Check TensorFlow Version",
        description: "Checks the installed version of TensorFlow.",
        downloadLink: "/scripts/Check_TensorFlow_Version.sh",
      },
      {
        name: "Check PyTorch Version",
        description: "Checks the installed version of PyTorch.",
        downloadLink: "/scripts/Check_PyTorch_Version.sh",
      },
      {
        name: "Train Scikit-learn Model",
        description: "Trains a machine learning model using Scikit-learn.",
        downloadLink: "/scripts/Train_Scikit_Learn_Model.sh",
      },
      {
        name: "Data Preprocessing with Pandas",
        description: "Performs data preprocessing using Pandas.",
        downloadLink: "/scripts/Data_Preprocessing_With_Pandas.sh",
      },
    ],
    'web development': [
      {
        name: "Install Node.js",
        description: "Installs Node.js runtime environment.",
        downloadLink: "/scripts/Install_Nodejs.sh",
      },
      {
        name: "Install npm Packages",
        description: "Installs npm packages for your project.",
        downloadLink: "/scripts/Install_Npm_Packages.sh",
      },
      {
        name: "Install Express.js",
        description: "Installs Express.js framework for Node.js.",
        downloadLink: "/scripts/Install_Express.sh",
      },
      {
        name: "Install React",
        description: "Installs React framework for frontend development.",
        downloadLink: "/scripts/Install_React.sh",
      },
      {
        name: "Install Angular",
        description: "Installs Angular framework for frontend development.",
        downloadLink: "/scripts/Install_Angular.sh",
      },
      {
        name: "Install Vue.js",
        description: "Installs Vue.js framework for frontend development.",
        downloadLink: "/scripts/Install_Vue.sh",
      },
      {
        name: "Install MongoDB",
        description: "Installs MongoDB NoSQL database.",
        downloadLink: "/scripts/Install_MongoDB.sh",
      },
      {
        name: "Install MySQL",
        description: "Installs MySQL database server.",
        downloadLink: "/scripts/Install_MySQL.sh",
      },
      {
        name: "Install PostgreSQL",
        description: "Installs PostgreSQL database server.",
        downloadLink: "/scripts/Install_PostgreSQL.sh",
      },
      {
        name: "Install Nginx",
        description: "Installs Nginx web server.",
        downloadLink: "/scripts/Install_Nginx.sh",
      },
      {
        name: "Start Node.js Server",
        description: "Starts the Node.js server.",
        downloadLink: "/scripts/Start_Nodejs_Server.sh",
      },
      {
        name: "Start React Development Server",
        description: "Starts the React development server.",
        downloadLink: "/scripts/Start_React_Development_Server.sh",
      },
      {
        name: "Start Angular Development Server",
        description: "Starts the Angular development server.",
        downloadLink: "/scripts/Start_Angular_Development_Server.sh",
      },
      {
        name: "Start Vue Development Server",
        description: "Starts the Vue development server.",
        downloadLink: "/scripts/Start_Vue_Development_Server.sh",
      },
      {
        name: "Start MongoDB Server",
        description: "Starts the MongoDB server.",
        downloadLink: "/scripts/Start_MongoDB_Server.sh",
      },
      {
        name: "Start MySQL Server",
        description: "Starts the MySQL server.",
        downloadLink: "/scripts/Start_MySQL_Server.sh",
      },
      {
        name: "Start PostgreSQL Server",
        description: "Starts the PostgreSQL server.",
        downloadLink: "/scripts/Start_PostgreSQL_Server.sh",
      },
      {
        name: "Check Nginx Status",
        description: "Checks the status of the Nginx server.",
        downloadLink: "/scripts/Check_Nginx_Status.sh",
      },
      {
        name: "Check MongoDB Status",
        description: "Checks the status of the MongoDB server.",
        downloadLink: "/scripts/Check_MongoDB_Status.sh",
      },
      {
        name: "Check MySQL Status",
        description: "Checks the status of the MySQL server.",
        downloadLink: "/scripts/Check_MySQL_Status.sh",
      },
    ],
    'mobile development': [
      {
        name: "Install Android Studio",
        description: "Installs Android Studio for mobile development.",
        downloadLink: "/scripts/Install_Android_Studio.sh",
      },
      {
        name: "Install Flutter",
        description: "Installs Flutter framework for cross-platform development.",
        downloadLink: "/scripts/Install_Flutter.sh",
      },
      {
        name: "Install Xcode",
        description: "Installs Xcode for iOS development (macOS only).",
        downloadLink: "/scripts/Install_Xcode.sh",
      },
      {
        name: "Install React Native CLI",
        description: "Installs React Native CLI for mobile development.",
        downloadLink: "/scripts/Install_React_Native_CLI.sh",
      },
      {
        name: "Install Android Emulator",
        description: "Installs Android Emulator for testing Android apps.",
        downloadLink: "/scripts/Install_Android_Emulator.sh",
      },
      {
        name: "Install iOS Emulator",
        description: "Installs iOS Emulator for testing iOS apps (macOS only).",
        downloadLink: "/scripts/Install_IOS_Emulator.sh",
      },
      {
        name: "Install Node.js for Mobile",
        description: "Installs Node.js for mobile development.",
        downloadLink: "/scripts/Install_Nodejs_for_Mobile.sh",
      },
      {
        name: "Install CocoaPods",
        description: "Installs CocoaPods for managing iOS dependencies (macOS only).",
        downloadLink: "/scripts/Install_CocoaPods.sh",
      },
      {
        name: "Create Flutter Project",
        description: "Creates a new Flutter project.",
        downloadLink: "/scripts/Create_Flutter_Project.sh",
      },
      {
        name: "Create React Native Project",
        description: "Creates a new React Native project.",
        downloadLink: "/scripts/Create_React_Native_Project.sh",
      },
      {
        name: "Run Android Emulator",
        description: "Runs the Android Emulator.",
        downloadLink: "/scripts/Run_Android_Emulator.sh",
      },
      {
        name: "Run iOS Emulator",
        description: "Runs the iOS Emulator (macOS only).",
        downloadLink: "/scripts/Run_IOS_Emulator.sh",
      },
      {
        name: "Build and Run Flutter Project",
        description: "Builds and runs a Flutter project.",
        downloadLink: "/scripts/Build_Run_Flutter_Project.sh",
      },
      {
        name: "Build and Run React Native Project",
        description: "Builds and runs a React Native project.",
        downloadLink: "/scripts/Build_Run_React_Native_Project.sh",
      },
      {
        name: "Install Android SDK",
        description: "Installs the Android SDK.",
        downloadLink: "/scripts/Install_Android_SDK.sh",
      },
      {
        name: "Install Xcode Command Line Tools",
        description: "Installs Xcode Command Line Tools (macOS only).",
        downloadLink: "/scripts/Install_Xcode_CLT.sh",
      },
      {
        name: "Check Flutter Version",
        description: "Checks the installed version of Flutter.",
        downloadLink: "/scripts/Check_Flutter_Version.sh",
      },
      {
        name: "Check React Native Version",
        description: "Checks the installed version of React Native.",
        downloadLink: "/scripts/Check_React_Native_Version.sh",
      },
      {
        name: "Check Android Emulator Status",
        description: "Checks the status of the Android Emulator.",
        downloadLink: "/scripts/Check_Android_Emulator_Status.sh",
      },
      {
        name: "Check iOS Simulator Status",
        description: "Checks the status of the iOS Simulator (macOS only).",
        downloadLink: "/scripts/Check_IOS_Simulator_Status.sh",
      },
    ],
    'game development': [
      {
        name: "Install Unity",
        description: "Installs Unity game engine.",
        downloadLink: "/scripts/Install_Unity.sh",
      },
      {
        name: "Install Unreal Engine",
        description: "Installs Unreal Engine game engine.",
        downloadLink: "/scripts/Install_Unreal_Engine.sh",
      },
      {
        name: "Install Godot",
        description: "Installs Godot game engine.",
        downloadLink: "/scripts/Install_Godot.sh",
      },
      {
        name: "Install Visual Studio",
        description: "Installs Visual Studio for game development.",
        downloadLink: "/scripts/Install_Visual_Studio.sh",
      },
      {
        name: "Install Blender",
        description: "Installs Blender for 3D modeling.",
        downloadLink: "/scripts/Install_Blender.sh",
      },
      {
        name: "Install GIMP",
        description: "Installs GIMP for image editing.",
        downloadLink: "/scripts/Install_GIMP.sh",
      },
      {
        name: "Install Git",
        description: "Installs Git for version control.",
        downloadLink: "/scripts/Install_Git.sh",
      },
      {
        name: "Create Unity Project",
        description: "Creates a new Unity project.",
        downloadLink: "/scripts/Create_Unity_Project.sh",
      },
      {
        name: "Create Unreal Project",
        description: "Creates a new Unreal Engine project.",
        downloadLink: "/scripts/Create_Unreal_Project.sh",
      },
      {
        name: "Create Godot Project",
        description: "Creates a new Godot project.",
        downloadLink: "/scripts/Create_Godot_Project.sh",
      },
      {
        name: "Build Unity Project",
        description: "Builds a Unity project.",
        downloadLink: "/scripts/Build_Unity_Project.sh",
      },
      {
        name: "Build Unreal Project",
        description: "Builds an Unreal Engine project.",
        downloadLink: "/scripts/Build_Unreal_Project.sh",
      },
      {
        name: "Build Godot Project",
        description: "Builds a Godot project.",
        downloadLink: "/scripts/Build_Godot_Project.sh",
      },
      {
        name: "Run Unity Project",
        description: "Runs a Unity project.",
        downloadLink: "/scripts/Run_Unity_Project.sh",
      },
      {
        name: "Run Unreal Project",
        description: "Runs an Unreal Engine project.",
        downloadLink: "/scripts/Run_Unreal_Project.sh",
      },
      {
        name: "Run Godot Project",
        description: "Runs a Godot project.",
        downloadLink: "/scripts/Run_Godot_Project.sh",
      },
      {
        name: "Install Unity Assets",
        description: "Installs assets from Unity Asset Store.",
        downloadLink: "/scripts/Install_Unity_Assets.sh",
      },
      {
        name: "Install Unreal Assets",
        description: "Installs assets from Unreal Engine Marketplace.",
        downloadLink: "/scripts/Install_Unreal_Assets.sh",
      },
      {
        name: "Create Unity Game Build",
        description: "Creates a game build in Unity.",
        downloadLink: "/scripts/Create_Unity_Game_Build.sh",
      },
      {
        name: "Create Unreal Game Build",
        description: "Creates a game build in Unreal Engine.",
        downloadLink: "/scripts/Create_Unreal_Game_Build.sh",
      },
    ],
  };

  // Get scripts for the current category
  const scripts = allScripts[category.toLowerCase()] || [];

  return (
    <div className="category-page">
      <h1 className="category-title">{category} Scripts</h1>
      <div className="scripts-container">
        {scripts.length > 0 ? (
          scripts.map((script) => (
            <div key={script.name} className="script-card">
              <h3 className="script-name">{script.name}</h3>
              <p className="script-description">{script.description}</p>
              <a
                href={script.downloadLink}
                className="download-button"
                download
              >
                Download
              </a>
            </div>
          ))
        ) : (
          <p>No scripts available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;