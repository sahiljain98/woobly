/**
 * get data points
 * @param {*} callback successful callback
 * @param {*} error error callback
 */
getDataPoints = async (callback, error) => {

    try {
        const response = await fetch('http://mywoobly.com/assignment.php');
        const result = await response.json();
        callback(result.data);
    } catch (e) {
        error(e);
    }

}

module.exports = {
    getDataPoints: getDataPoints
}