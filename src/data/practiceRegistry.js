import { practiceProblems } from './practiceProblems.js';

// Central lookup table mapping course IDs to their problem modules
export const practiceRegistry = {
    'astrophysics-1': practiceProblems,
    // Future course files will be added here:
    // 'calc-3': calc3Problems,
    // 'linear-algebra': linearAlgebraProblems,
    // 'thermodynamics': thermodynamicsProblems,
};

/**
 * Safely fetches practice problems whether passed (courseId, topicSlug) 
 * or just a legacy single parameter (topicSlug).
 */
export const getPracticeProblems = (courseIdOrTopic, topicSlug) => {
    if (topicSlug) {
        return practiceRegistry[courseIdOrTopic]?.[topicSlug] || null;
    }
    
    // Fallback: If courseId is omitted, search across astrophysics first or direct keys
    return practiceProblems[courseIdOrTopic] || practiceRegistry['astrophysics-1']?.[courseIdOrTopic] || null;
};