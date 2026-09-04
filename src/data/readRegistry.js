import { astrophysicsoneReadData } from './courses/astrophysicsone.js';

/**
 * READ REGISTRY
 * 
 * Central lookup table that decouples static reading article content from top-level page views.
 * Adding a new course simply requires importing its content module and registering its key here.
 */
export const readRegistry = {
    'astrophysics-one': astrophysicsoneReadData,
    // Future course data modules will be registered here
};

/**
 * Retrieves reading module data for a target course ID.
 * Falls back to 'astrophysics-one' as the default live module if the requested key is missing or undefined.
 * 
 * @param {string} courseId - The URL slug representing the target course module.
 * @return {Object} The reading data structure for the target course.
 */
export const getCourseReadData = (courseId) => {
    return readRegistry[courseId] || readRegistry['astrophysics-one'];
};