import { getAllServiceOptions } from './serviceApiIntegration'

export const getNewListOfQuestions = async () => {
    const services = await getAllServiceOptions()
    if (services) {
        const newQuestions = generateQuestionsFromListOfServices(services)
        return newQuestions
    } else {
        return null
    }
}

export const generateQuestionsFromListOfServices = (services) => {
    if (services.length < 10) return null
    const indecesArray = get10RandomIndecesFromList(services)
    const serviceNames = getServiceNamesFromServices(services)

    const questions = []
    for (let step = 0; step < 10; step++) {
        const service = services[indecesArray[step]]

        const correctAnswer = service.serviceName

        let answers = createListOfAnswers(serviceNames, correctAnswer)

        let indexOfCorrectAnswer = answers.indexOf(correctAnswer)
        const icon = service.icon

        const question = assembleQuestion(correctAnswer, icon, answers, indexOfCorrectAnswer)
        questions.push(question)
    }
    return questions
}

function assembleQuestion(correctAnswer, icon, answers, indexOfCorrectAnswer) {
    return {
        'service': correctAnswer,
        'icon': icon,
        'answers': answers,
        'correct': indexOfCorrectAnswer
    }
}

export function createListOfAnswers(serviceNames, correctAnswer) {
    const wrongAnswers = get3RandomElementsFromListExceptFor(serviceNames, correctAnswer)
    let answers = [...wrongAnswers, correctAnswer]
    answers = shuffle(answers)
    return answers
}

export function getServiceNamesFromServices(services) {
    const serviceNames = []
    services.forEach(service => {
        serviceNames.push(service.serviceName)
    })
    return serviceNames
}

export function get10RandomIndecesFromList(list) {
    var indecesArray = [];
    while (indecesArray.length < 10) {
        var r = Math.floor(Math.random() * list.length);
        if (indecesArray.indexOf(r) === -1) indecesArray.push(r);
    }
    return indecesArray;
}

export function get3RandomElementsFromListExceptFor(list, except) {
    const elements = []
    // TODO: don't pick an element twice
    // TODO: dont't pick the right one again
    for (let step = 0; step < 3; step++) {
        let index;
        do {
            index = Math.floor(Math.random() * list.length)
        } while ((list[index] === except) || elements.includes(list[index]))

        const element = list[index]
        elements.push(element)
    }
    return elements
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}



export const forgotPassword = () => {
    return true;
}

