import React from 'react';
import PropTypes from 'prop-types';

class ExpertIcon extends React.Component {
    render() {
        return <svg key={this.props.key} onClick={e => this.props.onClick && this.props.onClick(e)} viewBox="0 0 384.754 384.754" width={this.props.width || 20} height={this.props.height || this.props.width || 20} xmlns="http://www.w3.org/2000/svg" className={ this.props.className }>
            <path fill="currentColor" d="M214.86,374.508c0,4.971-4.029,9-9,9h-65.01c-4.971,0-9.223-3.57-9.223-8.541V288.87c0-4.971,4.252-9.361,9.223-9.361 h99.585c4.971,0,9,4.029,9,9s-4.029,9-9,9h-90.808v68h56.232C210.83,365.508,214.86,369.538,214.86,374.508z M136.65,115.508h10 c4.971,0,9-4.029,9-9s-4.029-9-9-9h-10c-4.971,0-9,4.029-9,9S131.679,115.508,136.65,115.508z M180.947,115.508h10 c4.97,0,9-4.029,9-9s-4.029-9-9-9h-10c-4.971,0-9,4.029-9,9S175.976,115.508,180.947,115.508z M152.056,142.508c0,4.971,4.029,9,9,9 h5c4.971,0,9-4.029,9-9s-4.029-9-9-9h-5C156.086,133.508,152.056,137.538,152.056,142.508z M127.875,220.987
c6.952,11.05,21.072,18.33,36.689,18.33c15.619,0,29.74-7.282,36.691-18.332c12.326,0.961,24.51,6.008,33.264,13.909
c3.69,3.329,9.381,3.038,12.712-0.651c3.33-3.69,3.038-9.536-0.651-12.866c-12.984-11.718-31.526-18.868-49.6-18.868h-1.237
c-3.845,0-7.265,2.597-8.513,6.232c-2.119,6.173-10.584,12.499-22.666,12.499c-12.08,0-20.546-6.366-22.667-12.539
c-1.249-3.636-4.668-6.193-8.512-6.193h-1.236c-30.601,0-59.207,19.216-65.123,43.549L40.6,354.841
c-0.119,0.442-0.205,0.936-0.255,1.402c-0.124,1.119-0.033,2.244,0.243,3.289c0.245,0.932,0.635,1.814,1.145,2.602
c1.056,1.635,2.77,2.936,4.713,3.615c0.342,0.119,0.181,0.45,1.181,0.528v0.23c0,0-0.258,0-0.257,0c0.646,0,1.293,0.107,1.93,0.107
c0.089,0,0.177-0.107,0.266-0.107h54.025c4.971,0,9-4.029,9-9s-4.029-9-9-9H60.743l23.773-97.92
C88.17,235.565,107.472,222.596,127.875,220.987z M189.97,248.508c-4.971,0-9,4.029-9,9s4.029,9,9,9h31.78c4.971,0,9-4.029,9-9
s-4.029-9-9-9H189.97z M74.842,100.475c-0.417-4.952,3.259-9.306,8.212-9.723c1.519-0.126,2.98,0.13,4.292,0.692
c1.424-6.374,3.641-12.519,6.628-18.336c-0.344-0.283-0.681-0.594-0.982-0.93c-0.329-0.366-0.648-0.756-0.91-1.164
c-0.819-1.275-1.455-2.772-1.455-4.38c0-0.002,0-0.005,0-0.008s0-0.007,0-0.01c0-0.218,0-0.437,0-0.656c0-0.003,0-0.006,0-0.009
c0-0.001,0-0.003,0-0.004c0-0.301,0.07-0.51,0.105-0.802C94.772,27.947,126.077,0,163.556,0c34.778,0,64.202,23.508,71.492,57.508
h24.149c4.971,0,9,4.029,9,9s-4.029,9-9,9h-25.056c2.481,5,4.362,10.481,5.62,16.11c1.31-0.562,2.771-0.992,4.293-0.866
c4.953,0.417,8.631,4.77,8.215,9.723l-1.17,13.92c-0.417,4.952-4.763,8.622-9.723,8.215c-0.326-0.027-0.646-0.072-0.961-0.133
c-6.549,36.481-38.522,64.25-76.86,64.25c-38.337,0-70.31-27.769-76.858-64.25c-0.314,0.061-0.635,0.104-0.961,0.133
c-4.945,0.421-9.306-3.261-9.723-8.215L74.842,100.475z M110.646,57.508h105.822c-6.838-23-28.063-39.334-52.912-39.334
C138.708,18.174,117.483,34.508,110.646,57.508z M103.471,108.857c0,33.132,26.955,59.957,60.086,59.957
c33.132,0,60.087-26.868,60.087-60c0-12.091-3.508-23.305-10.183-33.305h-99.809C106.977,85.508,103.471,96.765,103.471,108.857z
M344.428,256.584c-0.107-1.239-0.475-2.471-1.114-3.609c-0.174-0.312-0.367-0.614-0.579-0.905l-8.921-12.739
c-2.851-4.072-8.461-5.063-12.534-2.21c-4.071,2.851-5.062,8.463-2.21,12.534l6.039,8.625l-5.512,11.819
c-0.003,0.008-0.007,0.015-0.01,0.022l-5.523,12.046l-13.016,1.341c-0.002,0-0.004,0-0.006,0l-13.012,0.936l-7.494-10.805
c-0.004-0.005-0.007-0.059-0.011-0.064l-7.484-10.715l11.044-23.697l10.49-0.924c4.952-0.434,8.615-4.802,8.182-9.753
c-0.434-4.952-4.813-8.609-9.75-8.183l-15.495,1.356c-0.355,0.024-0.708,0.069-1.057,0.135c-1.297,0.243-2.487,0.761-3.515,1.485
c-1.014,0.713-1.893,1.644-2.556,2.764c-0.182,0.306-0.345,0.621-0.49,0.947l-15.289,32.79c-0.16,0.328-0.3,0.664-0.419,1.006
c-0.43,1.233-0.575,2.51-0.465,3.749c0.108,1.236,0.474,2.463,1.11,3.599c0.176,0.314,0.37,0.62,0.583,0.912l10.376,14.817
c0.005,0.007,0.01,0.014,0.015,0.021l7.479,10.685l-36.083,77.381c-2.101,4.505-0.151,9.86,4.354,11.961
c1.23,0.573,2.524,0.845,3.798,0.845c3.39,0,6.636-1.924,8.163-5.198l36.082-77.146l13.012-0.902c0.002,0,0.004,0,0.006,0
l18.021-1.813c0.358-0.024,0.714-0.188,1.064-0.256c1.292-0.243,2.477-0.817,3.501-1.539c1.014-0.711,1.891-1.669,2.555-2.786
c0.185-0.309,0.351-0.644,0.497-0.975l7.644-16.398c0.001-0.002,0.002-0.008,0.003-0.009l7.644-16.396
c0.159-0.326,0.299-0.66,0.417-1.001C344.392,259.102,344.538,257.825,344.428,256.584z"/>
        </svg>;
    }
}

ExpertIcon.propTypes = {
    key: PropTypes.string,
    onClick: PropTypes.func,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    className: PropTypes.string
};

export default ExpertIcon;
