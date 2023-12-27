export const constant = Object.freeze({
    SALT_ROUND: 10,
    QUEUE_DEFAULT_TIMEOUT: 60000,
    QUEUE_DEFAULT_ATTEMPTS: 3,
    OPEN_API_PREFIX: '/open-api',
    IGNORE_API_LOG: ['/cron/graphql', '/queue/graphql'],
    messageFormat: {
        'string.base': 'là một chuỗi kí tự',
        'string.min': 'sử dụng {#limit} ký tự trở lên',
        'string.max': 'sử dụng {#limit} ký tự trở xuống',
        'string.alphanum': 'bao gồm cả chữ và số',
        'string.email': 'email không hợp lệ',
        'string.pattern.base': 'theo mẫu',
        'number.base': 'là chữ số',
        'number.min': 'sử dụng số lớn hơn hoặc bằng {#limit}',
        'number.max': 'sử dụng số bé hơn hoặc bằng {#limit}',
        'any.required': 'bắt buộc',
        'any.only': 'không chính xác',
        'string.empty': 'trống',
        'date.base': 'ngày tháng không hợp lệ',
        'boolean.base': 'đúng hoặc sai',
        'array.length': 'số kí tự phải bằng {#limit}',
        'password.minOfUppercase': 'phải có ít nhất 1 chữ cái viết hoa',
        'password.minOfLowercase': 'phải có ít nhất 1 chữ cái viết thường',
        'password.minOfNumeric': 'phải có ít nhất 1 chữ số',
        'object.unknown': 'object.unknown',
    },
});