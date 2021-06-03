const asyncTimeout = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

exports.asyncTimeout = asyncTimeout;