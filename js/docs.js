
//------------------------------------------------------------------------
// Feature Buttons
//------------------------------------------------------------------------

function ShowBackground(target)
{
	var bg = target.querySelector('.feature_background');
	if (bg)
	{
		bg.classList.add('hover');
	}
	var bgc = target.querySelector('.feature_background_color');
	if (bgc)
	{
		bgc.classList.add('hover');
	}
}

function HideBackground(target)
{
	var bg = target.querySelector('.feature_background');
	if (bg)
	{
		bg.classList.remove('hover');
	}
	var bgc = target.querySelector('.feature_background_color');
	if (bgc)
	{
		bgc.classList.remove('hover');
	}
}

//------------------------------------------------------------------------

function ShowWipBackground(target)
{
	var bg = target.querySelector('.feature_background');
	if (bg)
	{
		bg.classList.add('hover_dark');
	}
	var bgc = target.querySelector('.feature_wip_background_color');
	if (bgc)
	{
		bgc.classList.add('hover');
	}
	var bgo = target.querySelector('.feature_wip_background_overlay');
	if (bgo)
	{
		bgo.classList.add('hover');
	}
	var wiptxt = target.querySelector('.feature_wip_banner_text');
	if (wiptxt)
	{
		wiptxt.classList.add('hover');
	}
}

function HideWipBackground(target)
{
	var bg = target.querySelector('.feature_background');
	if (bg)
	{
		bg.classList.remove('hover_dark');
	}
	var bgc = target.querySelector('.feature_wip_background_color');
	if (bgc)
	{
		bgc.classList.remove('hover');
	}
	var bgo = target.querySelector('.feature_wip_background_overlay');
	if (bgo)
	{
		bgo.classList.remove('hover');
	}
	var wiptxt = target.querySelector('.feature_wip_banner_text');
	if (wiptxt)
	{
		wiptxt.classList.remove('hover');
	}
}

//------------------------------------------------------------------------
