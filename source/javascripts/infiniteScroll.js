// Simple infinite Scrolling
      
      $(function(){
        
          var $timeline = $('.timeline'),
              $spinner = $('#Spinner').hide();
        
          function loadMore(){
            
            $(window).unbind('scroll.posts');
            
            $spinner.show();
            
            $.ajax({
              url: "more.html",
              success: function(html){
                  if(html){
                      $timeline.append(html);
                      $spinner.hide();
                  }else{
                      $spinner.html('<p>No more posts to show.</p>');
                  }
                  
                  $(window).bind('scroll.posts',scrollEvent);
              }
            });
          }
        
        
          //lastAddedLiveFunc();
          $(window).bind('scroll.posts',scrollEvent);
          
          function scrollEvent(){
            var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
            var  scrolltrigger = 0.95;

            if  ((wintop/(docheight-winheight)) > scrolltrigger)  loadMore();
          }
          
      });