import { forgotPassword } from "../services/questionService";
import questionService from "../services/questionService";
import apiServiceData from './servicesApiData';
// let { describe, it } = global;


describe("forgotPassword()", () => {
    it("should return true", () => {
        expect(forgotPassword()).toBeTruthy();
        expect(forgotPassword()).toEqual(true);
    });
});

describe("get10RandomIndecesFromList()", () => {

    it("should return a list of 10 unique elements", () => {
        const result = questionService.get10RandomIndecesFromList(apiServiceData)
        expect(result.length).toEqual(10)
        expect(hasDuplicates(result)).toBeFalsy()

    })
})


describe("getServiceNamesFromServices()", () => {
    it("should return a list only containing the serviceNames", () => {
        const serviceNames = questionService.getServiceNamesFromServices(apiServiceData)
        const expectedResult = ['athena', 'dynamodb', 'fargate', 'glue', 'lambda', 'pinpoint', 'rekognition', 's3', 'sagemaker', 'sns', 'sqs']
        expect(serviceNames).toEqual(expectedResult)
    })
})


describe("get3RandomElementsFromListExceptFor()", () => {
    it("should return a list only containing 3 serviceNames not equal to correct serviceName ", () => {
        const serviceNames = ['athena', 'dynamodb', 'fargate', 'glue']
        const correctServiceName = 'athena'
        const result = questionService.get3RandomElementsFromListExceptFor(serviceNames, correctServiceName)
        expect(result.length).toEqual(3)
        expect(result).not.toContain(correctServiceName)
    })

    it("should return a list not containing duplicates", () => {
        const serviceNames = ['athena', 'dynamodb', 'fargate', 'glue']
        const correctServiceName = 'athena'
        const result = questionService.get3RandomElementsFromListExceptFor(serviceNames, correctServiceName)
        console.log(result)
        expect(containsOnlyUniqueValues(result)).toBeTruthy()
    })
})


describe("createListOfAnswers()", () => {
    it("returns list of 4 answers containing the correct one", () => {
        const serviceNames = ['athena', 'dynamodb', 'fargate', 'glue', 'lambda', 'pinpoint', 'rekognition', 's3', 'sagemaker', 'sns', 'sqs']
        const correctAnswer = 'dynamodb'
        const answers = questionService.createListOfAnswers(serviceNames, correctAnswer)
        expect(answers.length).toEqual(4)
        expect(answers).toContain(correctAnswer)
    })
})


describe("generateQuestionsFromListOfServices()", () => {
    it("returns correct list of 10 questions", () => {
        const questions = questionService.generateQuestionsFromListOfServices(apiServiceData)
        expect(questions.length).toEqual(10)
        questions.forEach((question => {
            expect(question).toHaveProperty('service')
            expect(question.service).not.toBeNull()
            expect(question).toHaveProperty('icon')
            expect(question.icon).not.toBeNull()
            expect(question).toHaveProperty('answers')
            expect(question.answers).not.toBeNull()
            expect(question).toHaveProperty('correct')
            expect(question.correct).not.toBeNull()
        }))
    })
})


function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

function containsOnlyUniqueValues(myArray) {
    return myArray.length === new Set(myArray).size;
}