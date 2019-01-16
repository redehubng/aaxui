  $(document).ready(function () {


    //   NAVIGATION TOGGLE 
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active'),
                $('#content').toggleClass('active');
            });

            let $excessNav = $('.xs-nav');
            let $buttomNav = $('#extra-buttom-nav');
            let $buttomBtnToggler = $('.buttom-nav-toggler');

            
            if(document.body.scrollWidth <= 992){
                $excessNav.hide();
                $buttomNav.addClass('collapse ');
                $('.navbar-brand img').attr('src', '../images/axya-logo-mini.svg').css('margin', '0'),
                $('.main-nav').find('.search-form').css('padding','.25rem'),
                $('.notification-count').css('borderColor','#147ba7');
                // alert("yes");      
                
            }else{
                $excessNav.show(),
                $buttomNav.show();
                // alert("nont");      
            }

            $buttomBtnToggler.click(function () {
                $('#buttom-nav').append($buttomNav),
                $('#content').toggleClass('active-buttom'),
                $('#sidebar').toggleClass('active-buttom'),0
                $buttomNav.find('.nav-avatar').hide();
                $buttomNav.toggleClass('active');
            });
            

    // SEARCH SCRIPT
            let $searchForm = $('.search-form');
            let $searchComponents = $('.search-component');
            let $ssDisplay = $('.search-select-display');
            let $filterItem = $('.filter .dropdown-item');
            // show the search-components
           
            
            function openAction() {
                $searchComponents.show().css('z-index', '3'),
                $ssDisplay.css('opacity', '1');
                $('.crumb').hide();

            }

            function closeAction() {
                $searchComponents.hide().css('z-index', '-10'),
                $ssDisplay.css('opacity', '0');
                $('.crumb').show();

            }

            $searchForm.keypress(openAction);
          
            $searchForm.keyup(function(){
                if($searchForm.val() == ""){
                   closeAction();
                }

            });


            // DISPLAY FILTER LIST AND TYPE
            
                
            if ($filterItem.hasClass('active')){
                $('.filter-type').text($('.filter .dropdown-item.active').text());
            }
            $filterItem.click(function () {
               $filterItem.removeClass('active');
               $(this).addClass('active');  
               
               let filterText = $(this).text();
               $('.filter-type').text(filterText);
            })

});