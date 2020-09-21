import athenaImageFile from './icons/athena.png';
import dynamodbImageFile from './icons/dynamodb.png';
import fargateImageFile from './icons/fargate.png';
import glueImageFile from './icons/glue.png';
import lambdaImageFile from './icons/lambda.png';
import pinpointImageFile from './icons/pinpoint.png';
import rekognitionImageFile from './icons/rekognition.png';
import s3ImageFile from './icons/s3.png';
import sagemakerImageFile from './icons/sagemaker.png';
import snsImageFile from './icons/sns.png';
import sqsImageFile from './icons/sqs.png';

export default [
    {
        service: 'Athena',
        icon: athenaImageFile,
        answers: ['Athena', 'Kinesis', 'ElasticSearch', 'SimpleDB'],
        correct: 0
    },
    {
        icon: dynamodbImageFile,
        answers: ['DynamoDB', 'Kinesis', 'ElasticSearch', 'SimpleDB'],
        correct: 0
    },
    {
        icon: fargateImageFile,
        answers: ['Fargate', 'Kinesis', 'ElasticSearch', 'SimpleDB'],
        correct: 0
    },
    {
        icon: glueImageFile,
        answers: ['Glue', 'Kinesis', 'ElasticSearch', 'SimpleDB'],
        correct: 0
    },
    {
        icon: lambdaImageFile,
        answers: ['Lambda', 'Kinesis', 'ElasticSearch', 'SimpleDB'],
        correct: 0
    },
    {
        icon: rekognitionImageFile,
        answers: ['Rekognition', 'Kinesis', 'ElasticSearch', 'SimpleDB'],
        correct: 0
    },
    {
        icon: s3ImageFile,
        answers: ['S3', 'Kinesis', 'ElasticSearch', 'SimpleDB'],
        correct: 0
    },
    {
        icon: sagemakerImageFile,
        answers: ['Sagemaker', 'Kinesis', 'ElasticSearch', 'SimpleDB'],
        correct: 0
    },
    {
        icon: snsImageFile,
        answers: ['SNS', 'Kinesis', 'ElasticSearch', 'SimpleDB'],
        correct: 0
    },
    {
        icon: sqsImageFile,
        answers: ['SQS', 'Kinesis', 'ElasticSearch', 'SimpleDB'],
        correct: 0
    }
]
