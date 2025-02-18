window.addEventListener('load', () => {
	const f = document.getElementById('file1')
	f.addEventListener('change', evt => {
		let input = evt.target
		if (input.files.length == 0) {
			console.log('No file selected')
			return
		}
		const file = input.files[0]
		const reader = new FileReader()
		const ab =
			/^(?:(?:x|rep|repeat)(\d+) )?[0-9()+-/*FCUR]*[aA][bB](?:100)?&lt;=[0-9()+-/*FCUR]+ /
		const ad =
			/^(?:(?:x|rep|repeat)(\d+) )?[0-9()+-/*FCUR]*[aA][dD](?:100)?&lt;=[0-9()+-/*FCUR]+ /
		const p = /^<p/
		const rollresult =
			/\(([\d]{1,})AB(?:100)?&lt;=\d+\) ＞ \[[\d,]{1,}\] ＞ [\d]{1,}\+([\d]{1,})C-([\d]{1,})E ＞ 成功数[-\d]{1,}$/
		var names = []
		var result = []
		const pre = document.getElementById('pre1')
		const checkbox = document.getElementById("checkbox")

		function Output(name, result) {
			let ret = "<h2>## " + name + "(ロール回数：" + result[2] + "回)</h2>"

			if (!(result[0].length + result[1].length - 2)) {
				ret = ret + "<p>クリエラ無し！</p>"
				return ret
			}
			ret = ret + "<p>```</p>"
			if (result[0].length - 1) {
				ret = ret + "<p>クリティカル : " + result[0][0] + "回(" + Math.round((
					result[0][0] * 100) / result[2]) + "%)</p><br>"
				for (let k = 1; k < result[0].length; k++) {
					ret = ret + "<p>" + result[0][k] + "</p>"
				}
			}

			if ((result[0].length - 1) && (result[1].length - 1)) {
				ret = ret + "<p>``````</p>"
			}

			if (result[1].length - 1) {
				ret = ret + "<p>エラー : " + result[1][0] + "回(" + Math.round((result
					[1][0] * 100) / result[2]) + "%)</p><br>"
				for (let k = 1; k < result[1].length; k++) {
					ret = ret + "<p>" + result[1][k] + "</p>"
				}
			}
			ret = ret + "<p>```</p>"
			return ret
		}

        function reload(){
            let ret = ""
            for (let i = 0; i < names.length; i++) {
                if(document.getElementById('name_'+i).checked)
                    ret += Output(names[i],result[i])
			}
            pre.innerHTML = ret
        }
        window.reload = reload;

		reader.onload = () => {
			const text = reader.result.split('\n')

			if (text[6] != "    <title>ccfolia - logs</title>") {
				pre.innerHTML = "<h2>ccfoliaのログファイルではありません</h2>"
				return
			}

			for (let i = 0; i < text.length; i++) {
				if (!p.test(text[i].trim())) {
					continue
				}
				let textlen = text[i + 4].trim()
				if (ad.test(textlen)) {
					let rep = textlen.match(ad)[1]
					let namelen = text[i + 2]
					let name = namelen.substring(namelen.indexOf(">") + 1, namelen.lastIndexOf(
						"<"))
					if (!names.includes(name)) {
						names.push(name)
						result.push([
							[0],
							[0], 0
						])
					}
					if (!rep) {
						rep = "1"
					}
					rep = Number(rep)
					result[names.indexOf(name)][2] += rep
					let resultlen = ""
					let repnum = ""
					for (let k = 0; k < rep; k++) {
						if (!textlen.match(ad)[1]) {
							resultlen = text[i + 4].trim()
							repnum = ""
						} else {
							resultlen = text[i + 5 + (k * 3)].trim()
							repnum = textlen.slice(0, -3).replace(ad, "")
						}
						if (resultlen.endsWith("クリティカル！")) {
							result[names.indexOf(name)][0].push(repnum + resultlen.replace(ad,
								"").replace(/&lt;/g, "<").replace(/&gt;/g, ">"))
							result[names.indexOf(name)][0][0]++
						}
						if (resultlen.endsWith("エラー")) {
							result[names.indexOf(name)][1].push(repnum + resultlen.replace(ad,
								"").replace(/&lt;/g, "<").replace(/&gt;/g, ">"))
							result[names.indexOf(name)][1][0]++
						}
					}
				}

				if (ab.test(textlen)) {
					let rep = textlen.match(ab)[1]
					let namelen = text[i + 2]
					let name = namelen.substring(namelen.indexOf(">") + 1, namelen.lastIndexOf(
						"<"))
					if (!names.includes(name)) {
						names.push(name)
						result.push([
							[0],
							[0], 0
						])
					}
					if (!rep) {
						rep = "1"
					}
					rep = Number(rep)
					let resultlen = ""
					let repnum = ""
					for (let k = 0; k < rep; k++) {
						if (!textlen.match(ab)[1]) {
							resultlen = text[i + 4].trim()
							repnum = ""
						} else {
							resultlen = text[i + 5 + (k * 3)].trim()
							repnum = textlen.slice(0, -3).replace(ab, "")
						}
						let roll = resultlen.match(rollresult)
						if (roll == null) {
							break;
						}
						result[names.indexOf(name)][2] += Number(roll[1])
						if (Number(roll[2])) {
							result[names.indexOf(name)][0].push(repnum + resultlen.replace(ab,
								"").replace(/&lt;/g, "<").replace(/&gt;/g, ">"))
							result[names.indexOf(name)][0][0] += Number(roll[2])
						}
						if (Number(roll[3])) {
							result[names.indexOf(name)][1].push(repnum + resultlen.replace(ab,
								"").replace(/&lt;/g, "<").replace(/&gt;/g, ">"))
							result[names.indexOf(name)][1][0] += Number(roll[3])
						}
					}
				}
			}

			let ch = "<fieldset>"
			for (let i = 0; i < names.length; i++) {
				ch += '<input type="checkbox" name="name" value="' + names[i] +
					'" id="name_' + i +'"onchange="reload()" checked>' + '<label for="name_' + i + '">' +
					names[i] + '</label><br>';
			}
			ch += "</fieldset>"
			checkbox.innerHTML = ch

			let ret = ""
			for (let i = 0; i < names.length; i++) {
                ret += Output(names[i],result[i])
			}

			pre.innerHTML = ret
		}



		reader.readAsText(file)
	})
})
