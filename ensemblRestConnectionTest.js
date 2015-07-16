var rest = require('biojs-rest-ensembl')();

var gene_tree_id = "ENSGT00390000003602";
var gene_tree_url = rest.url.gene_tree({
  id: gene_tree_id
});
rest.call({
  url: gene_tree_url,
  success: function(data) {
    console.log(data);
  }
});


var gene_tree_id = "ENSGT00390000003602";
var gene_tree_url = rest.url.gene_tree({
  id: gene_tree_id
});
rest.call({
  url: gene_tree_url,
  success: function(data) {
    console.log('PRINTING random gene data');
    console.log(JSON.stringify(data, null, 4));
  }
});

var species = "homo sapiens";
var name = "BRCA2";
rest.call({
  url: rest.url.xref({
    species: species,
    name: name
  }),
  success: function(data) {
    console.log('PRINTING brca2 data');
    console.log(JSON.stringify(data, null, 4));
  }
});