# bioe231-theclique
BioE 231 The Clique Final Project

This is the JBrowse configuration for viewing data related to influenza, specifically the H1N1 and H3N2 strains. In order to set up the database properly, make sure you are using a Debian or Ubuntu distribution. Then go ahead and install linuxbrew, using the instructions below:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo >> /home/ubuntu/.bashrc
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /home/ubuntu/.bashrc
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
```

Finally, use the following scripts in the install_scripts folder as listed:
1. setup_environment.sh
2. download_data.sh
3. process_data.sh
4. add_to_jbrowse.sh

JBrowse Genome Viewing:

The following RefSeq IDs correspond to the following strains:
- GCF_001343785.1: H1N1 (2009)
- GCF_000865725.1: H1N1 (1934)
- GCF_000865085.1: H3N2
