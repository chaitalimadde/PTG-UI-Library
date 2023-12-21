/**
 * @since April 2022
 * @author Harsha Zalawa
 * @desc Drag and Drop example using react-dnd-treeview library
 */

import { useState } from 'react';
import { Tree } from '@minoru/react-dnd-treeview';
import { DRAG_DROP } from '../../mock/drag-n-drop';


export interface DragExampleFourProps {}

function DragExampleFour(props : DragExampleFourProps) {
  
  const [treeData, setTreeData] = useState(DRAG_DROP);
  const handleDrop = (newTreeData: any) => setTreeData(newTreeData);


  const checkChildExists = (id:any)=>{
      let arr = treeData.filter((item,index)=>{
        return id===item.parent;
      });

      return arr.length> 0 ? true:false;
  } 

  
  return (
    <>
      <div className="mt-3 tree-view">
        <Tree
          tree={treeData}
          rootId={0}
          onDrop={handleDrop}
          render={(node, { depth, isOpen, onToggle }) => (
            <div className="droppable">
              {node.droppable && (
                <span onClick={onToggle}>
                  <span onClick={onToggle}>{isOpen ? <i className="fa fa-minus" aria-hidden="true"></i> : (checkChildExists(node.id)? <i className="fa fa-plus" aria-hidden="true"></i>:null)}</span>
                </span>
              )}
              {node.text}
            </div>
          )}
        />
      </div>
    </>
  );
}

export default DragExampleFour;
