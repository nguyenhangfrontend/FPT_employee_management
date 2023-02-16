/* ERROR BOUNDARY COMPONENT
   ========================================================================== */

   import { Component, ReactNode } from 'react';
   
   
   class ErrorBoundary extends Component {
     constructor(props) {
       super(props);
       this.state = { error: null, errorInfo: null };
     }
   
     componentDidCatch(error, errorInfo) {
       this.setState({ error, errorInfo });
     }
   
     render() {
       if (this.state.error) {
         return (
           <div>
             <div className='flex flex-col justify-center items-center'>
               <h1>Whoops!</h1>
               <p>Stuck in a blind spot. Reload to see the magic!</p>
               <button className='text-blue-400' onClick={this.props.onReset}>Reload</button>
             </div>
           </div>
         );
       }
   
       return this.props.children;
     }
   }
   
   export default ErrorBoundary;
   