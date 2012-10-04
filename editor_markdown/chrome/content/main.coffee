class editormarkdown
  open: ->
    nsIFilePicker = Components.interfaces.nsIFilePicker
    fp = Components.classes["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker)
    fp.init(window, "Open File", nsIFilePicker.modeOpen)
    fp.appendFilters(nsIFilePicker.filterText | nsIFilePicker.filterAll)
    res = fp.show()
    if (res == nsIFilePicker.returnOK)
      thefile = fp.file
      data = @read(thefile.path)
      @cargarmarkdown(data, new Markdown.Converter())# llama a cargar el  archivo markdown con una instancia de la librería.
	  

  read: (filename) ->
    nsILocalFile = Components.interfaces.nsILocalFile
    file = Components.classes["@mozilla.org/file/local;1"].createInstance(nsILocalFile)
    file.initWithPath(filename)
    if (file.exists() == false)
      alert("File does not exist")
    nsIFileInputStream = Components.interfaces.nsIFileInputStream
    inputStream = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(nsIFileInputStream)
    inputStream.init(file,0x01,00004,null)
    nsIScriptableInputStream = Components.interfaces.nsIScriptableInputStream
    sInputStream = Components.classes["@mozilla.org/scriptableinputstream;1"].createInstance(nsIScriptableInputStream)
    sInputStream.init(inputStream)
    output = sInputStream.read(sInputStream.available())
    return output
	
  cargarmarkdown: (data,converter) ->
    
    array = d3.csv.parse(data)
    texto = d3.select("box")  # Almacena el contenido del archivo .mkd
			 .append("textbox")
			 .attr("value",data)
			 .attr("multiline",true)
             .attr("flex",1)
			 
    texto = d3.select("box") # Muestra el codigo html relacionado con el contenido markdown
			 .append("textbox")
			 .attr("value",converter.makeHtml(data))# llamada al método que convierte a html en la libreria MarkdownConverter.js
			 .attr("multiline",true)
			 .attr("editable",false)
			 .attr("readonly",true)
             .attr("flex",1)
	

@file = new editormarkdown