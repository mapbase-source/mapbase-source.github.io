
//------------------------------------------------------------------------
// Feature Buttons
//------------------------------------------------------------------------

var enlargedParent = null;
var enlargedImg = null;
var enlargedBg = null;
var enlargedClose = null;

function Enlarge(target)
{
	if (enlargedImg != null || enlargedBg != null)
		return;
	
	enlargedParent = document.createElement('div');
	enlargedParent.className = 'enlarged-parent';
	document.body.appendChild(enlargedParent);
	
	var img = target.getElementsByTagName('img')[0];
	if (img)
	{
		enlargedImg = img.cloneNode(false);
		enlargedImg.className = 'enlarged-img';
		enlargedParent.appendChild(enlargedImg);
	}
	
	if (!enlargedImg)
		return;
	
	enlargedBg = document.createElement('button');
	enlargedBg.className = 'enlarged-bg';
	enlargedBg.addEventListener('click', StopEnlarge);
	enlargedParent.appendChild(enlargedBg);
	
	enlargedClose = document.createElement('button');
	enlargedClose.className = 'enlarged-close';
	enlargedClose.textContent = "X";
	enlargedClose.addEventListener('click', StopEnlarge);
	enlargedBg.appendChild(enlargedClose);
	
	setTimeout(() => {
		if (enlargedImg != null)
			enlargedImg.classList.add('active');
		
		if (enlargedBg != null)
			enlargedBg.classList.add('active');
	}, 1);
}

function StopEnlarge()
{
	if (enlargedImg == null || enlargedBg == null)
		return;
	
	enlargedImg.classList.remove('active');
	enlargedBg.classList.remove('active');
	
	setTimeout(() => {
		if (enlargedClose != null)
			enlargedClose.remove();
		enlargedClose = null;
		
		if (enlargedBg != null)
			enlargedBg.remove();
		enlargedBg = null;
		
		if (enlargedImg != null)
			enlargedImg.remove();
		enlargedImg = null;
		
		if (enlargedParent != null)
			enlargedParent.remove();
		enlargedParent = null;
	}, 300); // 0.3
}

//------------------------------------------------------------------------
