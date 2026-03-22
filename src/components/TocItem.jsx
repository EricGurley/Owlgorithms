import React, { useState } from 'react';

const TocItem = ({ item, level = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const hasChildren = item.children && item.children.length > 0;

    return (
        <div className="toc-node">
            <div 
                className={`toc-header level-${level} ${hasChildren ? 'clickable' : ''}`}
                onClick={() => hasChildren && setIsOpen(!isOpen)}
                style={{ paddingLeft: `${level * 15}px` }}
            >
                {hasChildren ? (
                    <span className="toc-arrow">{isOpen ? '◢' : '▶'}</span>
                ) : (
                    <span className="toc-bullet">•</span> 
                )}
                
                {hasChildren ? (
                    <span>{item.title}</span>
                ) : (
                    <a href={item.link}>{item.title}</a>
                )}
            </div>

            {hasChildren && isOpen && (
                <div className="toc-children">
                    {item.children.map((childNode) => (
                        <TocItem key={childNode.id} item={childNode} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TocItem;