# Fresh instalation of [Debian](https://www.debian.org) computer.

Update and upgrade repos.

```sh
apt update
apt upgrade
```

## Common apps

```sh
apt install firefox-esr thunderbird vlc freefilesync filezilla vim gimp inkscape handbrake easytag asunder openshot-qt obs-studio telegram-desktop k3b kdenlive
```

## Programming languages

```sh
apt install sagemath cpp octave jupyter default-jre default-jdk perl golang git python3 ruby jekyll ghc ghc-prof ghc-doc doxygen polymake meson cmake make swi-prolog-full valgrind cppcheck
```

## Office

```sh
apt install texstudio libreoffice meld texlive-full pandoc
```

## Terminal apps

```sh
apt install neofetch htop tree curl nnn exiftool nvim
```

## Rust and apps with `cargo`


Add alias to `.bashrc` for easier use.

```sh
alias rustinstall="curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
```

Then install rust.

```sh
rustinstall
```

And other programs with cargo.

```sh
cargo install juliaup
cargo install mdbook
```

# My bashrc

```txt
export EDITOR='nvim'
export VISUAL='nvim'

# Git aliases
alias gtpl='git pull'
alias gtps='git push'
alias gadd='git add .'
alias gcom='git commit'
alias gdif='git diff'

# Meson aliases
alias mess='meson setup build/'
alias mesc='meson compile -C build/'
alias mesi='meson install -C build/'

# Programming languages aliases
alias p='python3'
alias c='g++ -o main *.cpp'
alias h='ghci'

# Update joplin and remove it.
alias updatejoplin='wget -O - https://raw.githubusercontent.com/laurent22/joplin/dev/Joplin_install_and_update.sh | bash'
alias removejoplin='rm -fr $(find ~ -regex .*local.*joplin.*) && rm -fr ~/.joplin'

# Update and install Rust language.
alias rustinstall="curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
```

# CZ programming keyboard

If you are missing CZ programming keyboard then use this [repo](https://github.com/sedlons/czech-programmer-keyboard-layout-xkb).
