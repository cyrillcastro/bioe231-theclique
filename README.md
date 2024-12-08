# bioe231-theclique
BioE 231 The Clique Final Project

This is the JBrowse configuration for viewing data related to influenza, specifically the H1N1 and H3N2 strains. In order to set up the database properly, make sure you are using a Debian or Ubuntu distribution. Then go ahead and install linuxbrew, using the instructions below:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo >> /home/ubuntu/.bashrc
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /home/ubuntu/.bashrc
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
```

Finally, use the following scripts in the install_scripts folder as listed (NOTE: you may need to change the APACHE_ROOT, GWAS file, and phylogenetic tree file paths, which are noted in steps 1, 3, and 4. Additionally, if you are having issues with running the scripts, you will need to change the permissions of the scripts with the following command: ```chmod u+x $script_name```):
1. setup_environment.sh
2. download_data.sh
3. process_data.sh
4. add_to_jbrowse.sh

### JBrowse Genome Viewing:

To view the UCSC data associated with the strains, open the track selector, click on the menu next to the search bar, and go to "turn on/off tracks" in connections. Afterwards, you can turn on connections associated with the strain you wish to view. Additionally, you can turn on the GWAS annotations under the available tracks when viewing the hg38 assembly

As reference, the following RefSeq IDs correspond to the following influenza strains:
- GCF_001343785.1: H1N1 (2009)
- GCF_000865725.1: H1N1 (1934)
- GCF_000865085.1: H3N2

### Protein Viewing:
In order to view the protein sequences associated with influenza, please download the Protein3d plugin from the plugin store. Afterwards, launch a protein viewing panel, then click on the toggle controls option on the right. Finally, enter the following IDs to view any of the following proteins, with "PDB" as the source:

| Gene   | Protein                   | PDB ID                                                                 |
|--------|---------------------------|------------------------------------------------------------------------|
| PB2    | Polymerase pb2            | 7AS0                           |
| PB1    | Polymerase pb1            | 4MJS                       |
| PB1-F2 | PB1-F2 protein            | 2HN8                         |
| PA     | Polymerase PA             | 4IUJ                         |
| PA-X   | Modified version of PA    | 6WHM                        |
| HA     | Hemagglutinin             | 6GOL                        |
| NP     | Nucleoprotein             | 5B7B                         |
| NA     | Neuraminidase             | 8E6J                       |
| M2     | Matrix protein 2          | 1NYJ                          |
| M1     | Matrix protein 1          | 3MD2                         |
| NS1    | Nonstructural protein 1   | 2N74                         |
| NEP    | Nuclear export protein    | 2QPJ                         |

### Phylogenetic Tree Viewing:
In order to view the provided phylogenetic tree file (HA_protein_1918-2012_phylotree.nh), please download the MsaView plugin for the plugin store. Afterwards, launch a multiple sequence alignment viewing panel, then upload the attached file (which should be in the data folder) under "Tree file or URL" after choosing the file upload option. The file should be unzipped in the data folder after running the process_data.sh script.

### Working Example of the JBrowse Genome Browser:
If you would like to try out our genome browser before installing, you can do so at the following link: <a href="https://mluo123.github.io/bioe231-theclique/jbrowse2/">https://mluo123.github.io/bioe231-theclique/jbrowse2/</a>
