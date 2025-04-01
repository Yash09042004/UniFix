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