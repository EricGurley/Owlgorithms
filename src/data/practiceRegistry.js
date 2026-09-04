import { practiceProblems } from './practiceProblems.js';

/**
 * PRACTICE REGISTRY
 * 
 * Central dictionary mapping course slugs to their algorithmic practice problem sets.
 * This decoupled architecture allows the `PracticeSession` UI component to dynamically render
 * questions for any subject without modifying router configurations or component code.
 */
export const practiceRegistry = {
    'astrophysics-1': practiceProblems,
    // Future course files will be added here
};

/**
 * Resolves problem blueprints for a given course and topic slug.
 * Supports both multi-course parameters `(courseId, topicSlug)` and single-parameter legacy routes `(topicSlug)`.
 * 
 * @param {string} courseIdOrTopic - The course identifier (or topic slug if legacy).
 * @param {string} [topicSlug] - The specific topic identifier within the course module.
 * @return {Array|null} Array of question generator blueprints, or null if no match is found.
 */
export const getPracticeProblems = (courseIdOrTopic, topicSlug) => {
    // Explicit course and topic lookup
    if (topicSlug) {
        return practiceRegistry[courseIdOrTopic]?.[topicSlug] || null;
    }
    
    // Legacy fallback: resolve topic slug against default course registry
    return practiceProblems[courseIdOrTopic] || practiceRegistry['astrophysics-1']?.[courseIdOrTopic] || null;
};