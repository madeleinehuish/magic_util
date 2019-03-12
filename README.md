This is a directory of node, python and data files. In the lib directory are some files that I constructed to sort and process the massive amount of Magic the Gathering data from the Scryfall api as well as the Magic the Gathering developer API. I have used the node and python files to sort/process the data into javaScript objects useable by one of my applications.

The core file to run is index.js.

I didn't want to push the data set to github as it is quite large.
If one wants to reconstruct this, just create a data_scryfall folder in root with a test sub-directory. You would also need to download the bulk json data set (named scryfall-default-cards.json in my file) from the following url (https://scryfall.com/docs/api/bulk-data) and place that file into root directory under folder data/originalData.
So dir structure from root would be :

data/originalData/scryfall-default-cards.json   (for pulling the initial data set to sort)

and

data_scryfall/test  (new files will go here)
