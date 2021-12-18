
  /***** move the slider ****/

    $(document).ready(function(){
        $('.carousel').carousel({
            interval:3000
        });

        //show options

        $('.fa-cog').click(function(){
            $('.color-option').fadeToggle();
        });


        // change color-Options

        var colorLI = $('.color-option ul li');

        colorLI
        .eq(0).css("backgroundColor","#DE2E18").end()
        .eq(1).css("backgroundColor"," #c82aef").end()
        .eq(2).css("backgroundColor"," #0aefc5").end()
        .eq(3).css("background","#26d335").end()
        .eq(4).css("background","  #d7f33b");

        colorLI.click(function(){
        $('link[href*="them"]').attr("href",$(this).attr('data-value'));
        });

    });






    //loading the web site
        
    $(window).on('load',function(){
        
        $(".loading-page .loading").fadeOut(2000,
            function()
            {
                $(this).parent().fadeOut(2000,
            function()
            {
                //show the scroll
                $("body").css("overflow","auto");
                $(this).remove();
            });
        });







        //scroll top

        var scrollButton = $('#scroll-top');

        $(window).scroll(function(){

            console.log($(this).scrollTop());//to now the number of scrolling

        if($(this).scrollTop()>= 500)
        {
            scrollButton.show();
        }
        else 
        {
            scrollButton.hide();
        }

        //click on button for scroll Top Again and Alone 
        scrollButton.click(function()
        {
            $("html,body").animate({ scrollTop: 0 }, 600);
        });

        });



         // change background of nav bar when scrolling

        $(window).scroll(function(){    

        if($(this).scrollTop()>=600)
        {
            $(".navbar").css('backgroundColor','rgba(75, 73, 73, 0.904)');
        }
        else if($(this).scrollTop()<=600) 
        {
            $(".navbar").css('backgroundColor','rgba(75, 73, 73, 0.411)');
        }

       });

    });

