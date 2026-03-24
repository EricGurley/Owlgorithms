import React, { useState } from 'react';

const TocItem = ({ item, level = 0, setActiveChapter }) => {
    const shouldBeOpenByDefault = item.id === 'part-1' || item.id === 'chapter-1';
    
    const [isOpen, setIsOpen] = useState(shouldBeOpenByDefault); 

    const hasChildren = item.children && item.children.length > 0;
    const handleNodeClick = () => {
        if (hasChildren) {
            setIsOpen(!isOpen);
        }
        
        if (setActiveChapter) {
            setActiveChapter(item.id); 
        }
    };

    return (
        <div className="toc-node">
            <div 
                className={`toc-header level-${level} clickable`} 
                onClick={handleNodeClick}
                style={{ paddingLeft: `${level * 15}px`, cursor: 'pointer' }}
            >
                {hasChildren ? (
                    <span className="toc-arrow">{isOpen ? '◢' : '▶'}</span>
                ) : (
                    <span className="toc-bullet">•</span> 
                )}
                
                <span>{item.title}</span>
            </div>

            {hasChildren && isOpen && (
                <div className="toc-children">
                    {item.children.map((childNode) => (
                        <TocItem 
                            key={childNode.id} 
                            item={childNode} 
                            level={level + 1} 
                            setActiveChapter={setActiveChapter} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TocItem;