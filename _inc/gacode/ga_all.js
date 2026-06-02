  (function() {
    // 1. 在這裡定義您的網址與對應的 GA ID
    var gaMap = {
      'www.travelking.com.tw': 'G-W53XQNGQRL',
      'travelking.com.tw': 'G-W53XQNGQRL',
      'www.hotel.com.tw': 'G-YCEBHEGC7R',
      'hotel.com.tw': 'G-YCEBHEGC7R'
    };

    // 2. 獲取當前網站的網域名稱 (hostname)
    var hostname = window.location.hostname;
    var targetId = gaMap[hostname] || ''; // 若不在名單中，使用預設 ID

    // 3. 動態建立原本那行 <script async src="...">
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + targetId;
    document.head.appendChild(script);

    // 4. 初始化 GA
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag; // 確保全域可用
    gtag('js', new Date());
    gtag('config', targetId);
  })();