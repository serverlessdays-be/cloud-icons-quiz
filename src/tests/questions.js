export default [
    {
        service: 'athena',
        icon: 'icons/athena',
        answers: ['pinpoint', 'athena', 'sagemaker', 'athena'],
        correct: 1
    },
    {
        service: 'glue',
        icon: 'icons/glue',
        answers: ['pinpoint', 'sns', 'glue', 'rekognition'],
        correct: 2
    },
    {
        service: 'sqs',
        icon: 'icons/sqs',
        answers: ['athena', 'sqs', 'glue', 's3'],
        correct: 1
    },
    {
        service: 'dynamodb',
        icon: 'icons/dynamodb',
        answers: ['s3', 'dynamodb', 'rekognition', 'fargate'],
        correct: 1
    },
    {
        service: 'fargate',
        icon: 'icons/fargate',
        answers: ['sqs', 'lambda', 'fargate', 'pinpoint'],
        correct: 2
    },
    {
        service: 'sns',
        icon: 'icons/sns',
        answers: ['lambda', 's3', 'sns', 'pinpoint'],
        correct: 2
    },
    {
        service: 's3',
        icon: 'icons/s3',
        answers: ['s3', 's3', 'dynamodb', 'fargate'],
        correct: 0
    },
    {
        service: 'pinpoint',
        icon: 'icons/pinpoint',
        answers: ['s3', 'pinpoint', 'glue', 'athena'],
        correct: 1
    },
    {
        service: 'lambda',
        icon: 'icons/lambda',
        answers: ['lambda', 'dynamodb', 'sqs', 'sagemaker'],
        correct: 0
    },
    {
        service: 'sagemaker',
        icon: 'icons/sagemaker',
        answers: ['sagemaker', 'pinpoint', 'rekognition', 'glue'],
        correct: 0
    }
]