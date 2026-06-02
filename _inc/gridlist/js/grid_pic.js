
 $(function(){
// input a jQuery element
// return true for elements with auto height (90-100% is considered auto as well)
// return false for elements with fixed height
function is_height_auto($e) {
    var e = $e[0],
        // check fixed style:
        chk = function(value) {
            return /\d/.test(value) && !/^(100|9\d)\%/.test(value);
        };

    // start from the first, easiest, inline styles
    if (chk(e.style.height)) {
        // console.log('fixed for having style', e.style.height)
        return false;
    }

    // start from the first, easiest, inline styles
    var overflow = getComputedStyle(e)['overflow'];
    if (overflow == 'scroll' || overflow == 'auto' || (e.tagName == 'BODY' && overflow == 'visible')) {
        // console.log('auto for having overflow or is body', getComputedStyle(e)['overflow'], e.tagName);
        return true;
    }

    // deprecated chrome way - check each rule that applies to the element
    if (typeof getMatchedCSSRules == 'function') {
        var i, MatchedCSSRules = getMatchedCSSRules(e) || [];
        for (i = MatchedCSSRules.length; i; i--) {
            if (MatchedCSSRules[i - 1].style.height) {
                // console.log('found height at MatchedCSSRules[' + (i - 1) + ']: ', MatchedCSSRules[i - 1], ' All matches: ', MatchedCSSRules)
                return !chk(MatchedCSSRules[i - 1].style.height);
            }
        }
    }

    // append something, see if height was changed, remove the something
    var originalHeight = $e.height(),
        $ghost = jQuery('<b style="display:block;height:1px;width:1px;padding:0;margin:0;">').appendTo($e),
        newHeight = $e.height();
    $ghost.remove(); // cleanup
    // console.log('Using a ghost got ',newHeight > originalHeight,' originalHeight=' + originalHeight + ' newHeight=' + newHeight)
    return newHeight > originalHeight;
} //is_height_auto()

$('.grid_pic').each(function() {

	if ($(this).find("img").length>0) {
        var img_src = $(this).find('img').attr('data-src');
        if (typeof img_src === typeof undefined || img_src === false) {
            img_src = $(this).find('img').attr('src');
        }
  //if (is_height_auto($(this))) {} else {
  $(this).css({'background-image':"url("+img_src+")"}).find('img').hide();
	//}
  }
});
});