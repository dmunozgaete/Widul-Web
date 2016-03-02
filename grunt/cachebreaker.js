//------------------------------------------------------
// Company: Valentys Ltda.
// Author: dmunozgaete@gmail.com
// 
// Description: Add random stamp into production for clean caching in Server
// 
// URL: https://github.com/hollandben/grunt-cache-bust
// 
//------------------------------------------------------
module.exports = function(grunt, options)
{

    return {
        production:
        {
            options:
            {
                match: ['.js', '.css']
            },
            files:
            {
                src: ['app/index.html']
            }
        }

    };




};
