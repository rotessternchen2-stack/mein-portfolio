import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  handleReload = () => {
    window.location.reload();
  }

  handleGoHome = () => {
    window.location.href = '/';
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-primary-50 to-accent-50 px-4">
          <div className="max-w-2xl w-full bg-white rounded-[3rem] shadow-xl p-8 md:p-12 border-2 border-primary-200 relative overflow-hidden">
            {/* Organischer Hintergrund */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-100 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-100 rounded-full opacity-30 blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                <span className="text-4xl">🌿</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
                Oops! Etwas ist schiefgelaufen 🌱
              </h1>
              
              <p className="text-lg text-neutral-700 mb-8 max-w-lg mx-auto">
                Wie eine Pflanze, die mal einen schlechten Tag hat – manchmal braucht es einfach einen Neustart! 
                Versuche es nochmal oder kehre zur Startseite zurück.
              </p>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left bg-primary-50 rounded-2xl p-6 mb-8 border border-primary-200">
                  <summary className="cursor-pointer font-semibold text-primary-700 mb-3">
                    🐛 Fehlerdetails (nur in Entwicklung sichtbar)
                  </summary>
                  <pre className="text-xs text-red-600 overflow-auto bg-white p-4 rounded-lg">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={this.handleReload}
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-full hover:from-primary-600 hover:to-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  🔄 Seite neu laden
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="px-8 py-4 bg-white text-primary-700 font-bold rounded-full hover:bg-primary-50 transition-all duration-300 shadow-md hover:shadow-lg border-2 border-primary-300"
                >
                  🏠 Zur Startseite
                </button>
              </div>

              {/* Fun Easter Egg */}
              <div className="mt-8 text-sm text-neutral-600 italic">
                <p>💡 Fun Fact: Selbst Fehler können schön aussehen! 🌿</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;



