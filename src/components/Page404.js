import React from 'react';
import Topbar from './Topbar';

const Page404 = () =>{
    return(
        
            <div id="content-wrapper" class="d-flex flex-column">

                
                <div id="content">

                    
                   <Topbar />
          

            
                    <div class="container-fluid">

              
                        <div class="text-center">
                            <div class="error mx-auto" data-text="404">404</div>
                            <p class="lead text-gray-800 mb-5">Page Not Found</p>
                            <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                            <a href="index.html">&larr; Back to Dashboard</a>
                        </div>

                    </div>
          

                </div>
         

    
                <footer class="sticky-footer bg-white">
                    <div class="container my-auto">
                        <div class="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2020</span>
                        </div>
                    </div>
                </footer>
         

                </div>
            
        
    )
}
export default Page404;