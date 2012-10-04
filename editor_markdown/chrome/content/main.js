(function() {
  var editormarkdown;
  editormarkdown = (function() {
    function editormarkdown() {}
    editormarkdown.prototype.open = function() {
      var data, fp, nsIFilePicker, res, thefile;
      nsIFilePicker = Components.interfaces.nsIFilePicker;
      fp = Components.classes["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
      fp.init(window, "Open File", nsIFilePicker.modeOpen);
      fp.appendFilters(nsIFilePicker.filterText | nsIFilePicker.filterAll);
      res = fp.show();
      if (res === nsIFilePicker.returnOK) {
        thefile = fp.file;
        data = this.read(thefile.path);
        return this.cargarmarkdown(data, new Markdown.Converter());
      }
    };
    editormarkdown.prototype.read = function(filename) {
      var file, inputStream, nsIFileInputStream, nsILocalFile, nsIScriptableInputStream, output, sInputStream;
      nsILocalFile = Components.interfaces.nsILocalFile;
      file = Components.classes["@mozilla.org/file/local;1"].createInstance(nsILocalFile);
      file.initWithPath(filename);
      if (file.exists() === false) {
        alert("File does not exist");
      }
      nsIFileInputStream = Components.interfaces.nsIFileInputStream;
      inputStream = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(nsIFileInputStream);
      inputStream.init(file, 0x01, 00004, null);
      nsIScriptableInputStream = Components.interfaces.nsIScriptableInputStream;
      sInputStream = Components.classes["@mozilla.org/scriptableinputstream;1"].createInstance(nsIScriptableInputStream);
      sInputStream.init(inputStream);
      output = sInputStream.read(sInputStream.available());
      return output;
    };
    editormarkdown.prototype.cargarmarkdown = function(data, converter) {
      var array, texto;
      array = d3.csv.parse(data);
      texto = d3.select("box").append("textbox").attr("value", data).attr("multiline", true).attr("flex", 1);
      return texto = d3.select("box").append("textbox").attr("value", converter.makeHtml(data)).attr("multiline", true).attr("editable", false).attr("readonly", true).attr("flex", 1);
    };
    return editormarkdown;
  })();
  this.file = new editormarkdown;
}).call(this);
