// initialize a new dataset
var ds = new Miso.Dataset({
  data: { columns : [ 
    { name : "one",   data : [10, 2, 3, 14, 3, 4] },
    { name : "two",   data : [40,  5, 6, 1,  1, 1] },
    { name : "three", data : [400,  5, 6, 1,  1, 1] }
  ] },
  strict: true
});

_.when(ds.fetch()).then(function(){  
  console.log("Max of one", ds.max("one"));
  console.log("Max of two", ds.max("two"));
  console.log("Max of one & two", ds.max(["one", "two"]));
  console.log("Max of all", ds.max());
});