$(function(){	
	var $topbar = $("#sharedheader .topbar");
	$(window).resize(function() {
        $topbar.appendTo($(window).width()<600?$('#sharednavmenu .size .bar'):$('#sharedheader .bar'));	
     $(".menu_open").removeClass('menu_open');
    $(".liopen").removeClass('liopen');
    }).resize();
	
});
$(window).load(function(){
	var $win = $(window),
		$menu=$("#sharednavmenu"),
		$m_ali=$menu.find("li"),
		$m_li=$menu.find(".menu_ul li ul").parent().addClass("m_li"),//有ul 的li
		$shared_head_f=$("#shared_head_f");
	
	//手機選單按鈕
    $menu.click(function(event) {
	        event.stopPropagation(); });
    $menu.children("h2").click(function() {
          $(this).siblings(".size").parent().parent().toggleClass("menu_open");
    }); 
	
	//子選單取消繼承
	$m_ali.click(function(event) {event.stopPropagation();}); 	
	
	//子選單展開
	$m_li.click(function(event) {event.preventDefault();
		if($win.width()>=970){
			//電腦板
			if(event.currentTarget.classList[0]==="li"){
				//第一層點第二下消失要用toggle
				//抓點下後顯示子選單第幾個 $(this).data("eq")
				$(this).toggleClass("m_on").children("ul").slideToggle()
					.children("li").eq($(this).data("eq")).click();
			}else{
				//第二層 第二下不能消失
				$(this).addClass("m_on").children("ul").slideDown();
			}
			//兄弟區塊關閉
			$(this).siblings().removeClass("m_on").children("ul").slideUp();
		}else{
			//行動板
			if(event.target.localName==="span"){
			//判斷是span才展開.點第二下消失
				$(this).siblings().removeClass("m_on").children("ul").slideUp().end().end().toggleClass("m_on").children("ul").slideToggle();
			}
		}
	});
	$m_li.children("a").click(function(event) {
		//電腦板 a無效
		if($win.width()>=970){
			event.preventDefault();
		}
	});
	//點外面關閉
	$win.click(function() {
		$m_li.removeClass("m_on").children("ul").slideUp();
	});
	$win.on("scroll resize",shared_head_f);
	
	//scroll	
	function shared_head_f() {
        if ($win.scrollTop() > 50) {
            $shared_head_f.addClass("shared_head_s");
        } else {
            $shared_head_f.removeClass("shared_head_s");
        }
    }
	
});