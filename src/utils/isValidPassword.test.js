/* eslint-disable */
const { isValidPassword } = require('./isValidPassword');

describe('isValidPassword() 테스트', () => {
    const NOT_STRING = 123456;
    const SHORT_PASSWORD = 'Pass1@';
    const LONG_PASSWORD =
        'Password2@Password2@Password2@Password2@Password2@Password2@';
    const NOT_IN_UPPER_CASE = 'password12#$';
    const NOT_IN_LOWER_CASE = 'PASSWORD12#$';
    const NOT_IN_DIGIT = 'Password!@#$';
    const NOT_IN_SPECIAL_CHAR = 'Password1234';
    const REPEAT_THREE_OVER = 'Password12#$aaa';
    const INCLUDE_WHITE_SPACE = 'Pass  word12#$';
    const VALID_PASSWORD = 'ValidPassword12#$';

    test.each([
        ['비밀번호는 문자로 이루어져야 합니다.', NOT_STRING, false],
        [
            '비밀번호는 길이가 8자리 이상 50자리 이하여야 합니다.',
            SHORT_PASSWORD,
            false
        ],
        [
            '비밀번호는 길이가 8자리 이상 50자리 이하여야 합니다.',
            LONG_PASSWORD,
            false
        ],
        [
            '비밀번호에는 대문자, 소문자, 숫자, 특수 문자가 각각 최소 1개 이상 포함되어야 합니다.',
            NOT_IN_UPPER_CASE,
            false
        ],
        [
            '비밀번호에는 대문자, 소문자, 숫자, 특수 문자가 각각 최소 1개 이상 포함되어야 합니다.',
            NOT_IN_LOWER_CASE,
            false
        ],
        [
            '비밀번호에는 대문자, 소문자, 숫자, 특수 문자가 각각 최소 1개 이상 포함되어야 합니다.',
            NOT_IN_DIGIT,
            false
        ],
        [
            '비밀번호에는 대문자, 소문자, 숫자, 특수 문자가 각각 최소 1개 이상 포함되어야 합니다.',
            NOT_IN_SPECIAL_CHAR,
            false
        ],
        [
            '비밀번호에는 연속적으로 같은 문자가 3번 이상 반복될 수 없습니다.',
            REPEAT_THREE_OVER,
            false
        ],
        [
            '비밀번호에는 공백(스페이스, 탭)이 없어야 합니다.',
            INCLUDE_WHITE_SPACE,
            false
        ],
        [
            '위의 모든 테스트 케이스를 통과하는 올바른 비밀번호 입니다.',
            VALID_PASSWORD,
            true
        ]
    ])('%s - %s', (testDescription, password, expected) => {
        expect(isValidPassword(password)).toEqual(expected);
    });
});
