    var features = document.getElementById('under_features')
	var company = document.getElementById('under_company')
	var arrow = document.getElementById('up_arrow')
	var arrowI = document.getElementById('up_arrow_I')
		var menu = document.getElementById('menu')
		var sideMenu = document.getElementById('side_nav_bar')
		var sideFeatures = document.getElementById('side_features')
		var sideCompany = document.getElementById('side_company')
		var sideArrow =	document.getElementById('side_arrow')
		var sideArrowI = document.getElementById('side_arrow_I')
		var dark = document.getElementById("opaque")
			features.style.display = "none"
			company.style.display = "none"
			sideMenu.style.right = "-250px"
			sideFeatures.style.display = "none"
			sideCompany.style.display = "none"
			dark.style.display = "none"
	function dropDownFeatures() {
		if (features.style.display == "none") {
			features.style.display = "block"
			arrow.src = "./images/icon-arrow-up.svg"
		} else{
			features.style.display = "none"
			arrow.src = "./images/icon-arrow-down.svg"
		}
	}
	function dropDownCompany() {
		if (company.style.display == "none") {
			company.style.display = "block"
			arrowI.src = "./images/icon-arrow-up.svg"
		} else{
			company.style.display = "none"
			arrowI.src = "./images/icon-arrow-down.svg"
		}
	}
	menu.onclick = function(){
		if (sideMenu.style.right == "-250px") {
			sideMenu.style.right = "0px"
			dark.style.display = "block"
			menu.src = "./images/icon-close-menu.svg "
		} else{
			sideMenu.style.right = "-250px"
			menu.src = "./images/icon-menu.svg"
			dark.style.display = "none"
		}
	}
	function dropSideFeatures(){
		if (sideFeatures.style.display == "none") {
			sideFeatures.style.display = "block"
			sideArrow.src = "./images/icon-arrow-up.svg"
		} else{
			sideFeatures.style.display = "none"
			sideArrow.src = "./images/icon-arrow-down.svg"
		}
	}
	function dropSideCompany(){
		if (sideCompany.style.display == "none") {
			sideCompany.style.display = "block"
			sideArrowI.src = "./images/icon-arrow-up.svg"
		} else{
			sideCompany.style.display = "none"
			sideArrowI.src = "./images/icon-arrow-down.svg"
		}
	}