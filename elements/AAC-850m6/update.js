function(instance, properties, context) {
    let text = properties.form_url
	let result = text.replace("/edit","");
	let classid=instance.data.id
	let div=$('<div style="width:100%; height:100%;" class='+classid+'><iframe src="' + result + '/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0" style="width:100%; height:100%;" >Loading…</iframe>></iframe></div>')
    if(!instance.data.div){
       instance.canvas.append(div)
        instance.data.div = true
       }
	}