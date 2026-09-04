import { astrophysicsoneReadData } from './courses/astrophysicsone.js';

export const readRegistry = {
    'astrophysics-one': astrophysicsoneReadData,
    // Future course data modules will be registered here
};

export const getCourseReadData = (courseId) => {
    return readRegistry[courseId] || readRegistry['astrophysics-one'];
};