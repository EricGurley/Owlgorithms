import React, { useState } from 'react';

const TocItem = ({ item, level = 0, setActiveChapter }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const hasChildren = item.children && item.children.length > 0;

    const handleNodeClick = (e) => {
        e.preventDefault(); // This stops any rogue HTML links from refreshing the page
        
        // --- THE DETECTIVE LOGS ---
        console.log("👉 Clicked on:", item.title, "| ID:", item.id);
        console.log("🛠️ Did Read.jsx hand over the function?", !!setActiveChapter);

        if (hasChildren) {
            setIsOpen(!isOpen);
        }
        
        if (setActiveChapter) {
            setActiveChapter(item.id);
            console.log("✅ Function fired successfully!");
        } else {
            console.error("🚨 ERROR: setActiveChapter is undefined here!");
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
                
                {/* Notice there are NO <a> tags here anymore! */}
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