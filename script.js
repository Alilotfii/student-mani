function showReportCard(){
    document.getElementById('dashboardView').style.display = 'none';
    document.getElementById('reportView').style.display = 'block';
    window.scrollTo(0,0);
  }
  function showDashboard(){
    document.getElementById('reportView').style.display = 'none';
    document.getElementById('dashboardView').style.display = 'block';
    window.scrollTo(0,0);
  }
  function printReportCard(){
    window.print();
  }
