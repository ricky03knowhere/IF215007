# Pertemuan 11
## Changelog
View at [Homepage](https://github.com/ricky03knowhere/IF215007#pertemuan-11)
- 💭💡Membahas Linux Web Server
- 💭💡Membahas Aneka Cheatsheet Shell
- ✅ `CREATE` : Mengerjakan Quiz Linux Web Server
- ⚡Instalasi WSL, zsh & zsh theme
- ⚡`DEMO` : Penggunaan Vim

## Aneka Cheatsheet Shell
- [Basic Linux/Unix Commands Cheat Sheet](https://sysaix.com/basic-linux-unix-commands-cheat-sheet)
- [Bash scripting cheatsheet](https://devhints.io/bash)

## Tugas
### ⚡ Install WSL
- Windows Search >> Turn Windows Features on / off
  
  ✅ Virtual Machine, Windows Hypervisor, Windows subsystem

    ![img](./Screenshot%202022-05-17%20141237.png)

- WSL2 update package

  Link : [https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

- Set default version

  ```shell 
  wsl --set-default-version 2
  ```

- Download Linux Distro at Windows Store 

  ![img](./Screenshot%202022-11-27%20101954.jpg)

- Errors & Solution

  - Error : 

    ```shell 
    WslRegisterDistribution failed with error: 0xffffffff Error: 0xffffffff (null)
    ```

  - Solution :

    - Bukan Powershell as administrator, Cari apakah ada port 53 yang sudah berjalan.
    
      ```shell 
      netstat -a -o -n 
      ```
      
      ![img](Screenshot%202022-05-17%20143304.png)

    - Matikan proses yang berjalan: 

      ```shell
      taskkill /f /pid [PID]
      ```

      ![img](./Screenshot%202022-05-17%20143359.png)

- Linux Distro berhasil diinstal

  ![img](./Screenshot%202022-11-27%20104927.jpg)


### ⚡ Install zsh
- Install zsh

    ```shell
    sudo apt-get install zsh
    ```
- Install oh-my-zsh

    ```shell
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
    ```
  ![img](./Screenshot%202022-11-27%20110011.jpg)

### ✨ Bagus-bagusin terminalnya pake theme zsh

- Install powerlevel10k

  ```shell
  git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
  ```

- Set `ZSH_THEME="powerlevel10k/powerlevel10k` in ~/.zshrc

- Hasil akhir

  ![img](./Screenshot%202022-11-27%20113311.jpg)

### Demo Vim
  ![img](./Screenshot%202022-11-27%20113013.jpg)
