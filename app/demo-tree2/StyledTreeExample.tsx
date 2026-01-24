import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';

const RootNode = styled.div`
  padding: 10px 20px;
  border-radius: 15px;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  background-color: #F79549;
  color: black;
`;

const MDNode = styled.div`
  padding: 8px 10px;
  border-radius: 12px;
  display: inline-block;
  border: 2px solid #14B8A6;
  background-color: white;
  color: black; 
  font-weight: 600;
  font-size: 18px;
`;

const TeamNode = styled.div`
  padding: 6px 12px;
  border-radius: 12px;
  display: inline-block;
  border: 1px solid #D1D5DB;
  background-color: white;
  color: black; 
  font-weight: 500;
  font-size: 16px;
`;

const SubNode = styled.div`
  padding: 6px 10px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid #D1D5DB;
  background-color: white;
  color: black;
  font-size: 14px;
`;

const SmallNode = styled.div`
  padding: 4px 8px;
  border-radius: 6px;
  display: inline-block;
  border: 1px solid #D1D5DB;
  background-color: white;
  color: black;
  font-size: 12px;
`;

const TextNode = styled.div`
  padding: 4px 4px;
  display: inline-block; 
  border-radius: 4px;
  color: #374151;
  font-size: 10px;
  text-align: center;
  border: 1px solid #D1D5DB;
  background-color: white;
  color: black;
`;

const OrganizationChart = () => (
  <div className="w-full pt-10 min-h-screen bg-gray-50 p-1 overflow-x-auto">
    <Tree
      lineWidth={'2px'}
      lineColor={'#F87171'}
      lineBorderRadius={'5px'}
      label={<RootNode>Betopia Limited</RootNode>}
    >
      <TreeNode label={<MDNode>Managing Director</MDNode>}>
        <TreeNode label={<TeamNode>Technology Team</TeamNode>}>
          <TreeNode label={<SubNode>Enterprise</SubNode>}>
            <TreeNode label={<TextNode>Identify and Modern Works</TextNode>} />
            <TreeNode label={<TextNode>Hybrid cloud /infrastructure</TextNode>} />
            <TreeNode label={<TextNode>Cyber-Security</TextNode>} />
            <TreeNode label={<TextNode>Data & AI</TextNode>} />
          </TreeNode>
          <TreeNode label={<SubNode>Product</SubNode>} />
        </TreeNode>

        <TreeNode label={<TeamNode>Business Development Team</TeamNode>}>
          <TreeNode label={<SubNode>Local</SubNode>}>
            <TreeNode label={<TextNode>FSI</TextNode>} />
            <TreeNode label={<TextNode>NGO & Helthcare</TextNode>} />
            <TreeNode label={<TextNode>Congla Heritage</TextNode>} />
            <TreeNode label={<TextNode>Government</TextNode>} />
            <TreeNode label={<TextNode>Manufacturer</TextNode>} />
          </TreeNode>
          <TreeNode label={<SubNode>International</SubNode>}>
            <TreeNode label={<SmallNode>Country-wise SBU</SmallNode>} />
            <TreeNode label={<SmallNode>Market Place</SmallNode>}>
              <TreeNode label={<TextNode>UpWork</TextNode>} />
              <TreeNode label={<TextNode>Fiverr</TextNode>} />
            </TreeNode>
          </TreeNode>
        </TreeNode>

        <TreeNode label={<TeamNode>Operation Team</TeamNode>}>
          <TreeNode label={<SmallNode>Sales Operation</SmallNode>} />
          <TreeNode label={<SmallNode>OEM Management</SmallNode>} />
          <TreeNode label={<SmallNode>Project Management</SmallNode>} />
          <TreeNode label={<SmallNode>Tender & Proposal Management</SmallNode>} />
        </TreeNode>

        <TreeNode label={<TeamNode>Backend Team</TeamNode>}>
          <TreeNode label={<SmallNode>Accounts</SmallNode>} />
          <TreeNode label={<SmallNode>Finance</SmallNode>} />
          <TreeNode label={<SmallNode>HR</SmallNode>} />
          <TreeNode label={<SmallNode>Admin</SmallNode>} />
        </TreeNode>

        <TreeNode label={<TeamNode>Data Center Service</TeamNode>}>
          <TreeNode label={<SmallNode>Data Center</SmallNode>} />
          <TreeNode label={<SmallNode>Zenex Cloud</SmallNode>} />
        </TreeNode>
      </TreeNode>
    </Tree>
  </div>
);

export default OrganizationChart;






// import React, { useRef, useEffect } from 'react';
// import { Tree, TreeNode } from 'react-organizational-chart';
// import styled from 'styled-components';

// // তোমার অরিজিনাল স্টাইল — একটাও পরিবর্তন করিনি
// const RootNode = styled.div`
//   padding: 10px 20px;
//   border-radius: 15px;
//   display: inline-block;
//   font-size: 24px;
//   font-weight: bold;
//   background-color: #F79549;
//   color: black;
// `;

// const MDNode = styled.div`
//   padding: 8px 10px;
//   border-radius: 12px;
//   display: inline-block;
//   border: 2px solid #14B8A6;
//   background-color: white;
//   color: black; 
//   font-weight: 600;
//   font-size: 18px;
// `;

// const TeamNode = styled.div`
//   padding: 6px 12px;
//   border-radius: 12px;
//   display: inline-block;
//   border: 1px solid #D1D5DB;
//   background-color: white;
//   color: black; 
//   font-weight: 500;
//   font-size: 16px;
// `;

// const SubNode = styled.div`
//   padding: 6px 10px;
//   border-radius: 8px;
//   display: inline-block;
//   border: 1px solid #D1D5DB;
//   background-color: white;
//   color: black;
//   font-size: 14px;
// `;

// const SmallNode = styled.div`
//   padding: 4px 8px;
//   border-radius: 6px;
//   display: inline-block;
//   border: 1px solid #D1D5DB;
//   background-color: white;
//   color: black;
//   font-size: 12px;
// `;

// const TextNode = styled.div`
//   padding: 4px 4px;
//   display: inline-block; 
//   border-radius: 4px;
//   color: #374151;
//   font-size: 10px;
//   text-align: center;
//   border: 1px solid #D1D5DB;
//   background-color: white;
//   color: black;
// `;

// // শুধু lg এবং তার নিচে স্ক্রল + হিন্ট চালু হবে
// const ScrollWrapper = styled.div`
//   width: 100%;
//   background-color: #f9fafb;

//   /* lg (1024px) এবং তার নিচে → স্ক্রল চালু */
//   @media (max-width: 1023.98px) {
//     overflow-x: auto;
//     padding: 20px 0;
//     position: relative;

//     /* স্ক্রলবার লুকানো কিন্তু কাজ করবে */
//     -ms-overflow-style: none;
//     scrollbar-width: none;
//     &::-webkit-scrollbar { display: none; }

//     /* রাইট সাইডে গ্রেডিয়েন্ট ফেইড */
//     &::after {
//       content: '';
//       position: absolute;
//       top: 0; right: 0;
//       width: 80px;
//       height: 100%; 
//       pointer-events: none;
//       z-index: 10;
//       transition: opacity 0.4s;
//     }
//     &.scrolled-to-end::after { opacity: 0; }
//   }

//   /* lg এর উপরে → কোনো স্ক্রল নাই, সব ফিট */
//   @media (min-width: 1024px) {
//     overflow: visible;
//   }
// `;

// const MobileHint = styled.div`
//   position: absolute;
//   top: 90%;
//   right: 16px;
//   transform: translateY(-50%);
//   background: rgba(0,0,0,0.8);
//   color: white;
//   padding: 10px 16px;
//   border-radius: 50px;
//   font-size: 14px;
//   font-weight: 600;
//   z-index: 20;
//   pointer-events: none;
//   animation: bounce 2s infinite;

//   @media (min-width: 1024px) {
//     display: none;
//   }

//   @keyframes bounce {
//     0%, 100% { transform: translateY(-50%) translateX(0); }
//     50% { transform: translateY(-50%) translateX(10px); }
//   }
// `;

// const OrganizationChart = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const checkEnd = () => {
//       if (window.innerWidth >= 1024) return; // lg+ এ দরকার নাই

//       const atEnd = Math.abs(
//         container.scrollWidth - container.clientWidth - container.scrollLeft
//       ) < 20;

//       if (atEnd) {
//         container.classList.add('scrolled-to-end');
//       } else {
//         container.classList.remove('scrolled-to-end');
//       }
//     };

//     checkEnd();
//     container.addEventListener('scroll', checkEnd);
//     window.addEventListener('resize', checkEnd);

//     return () => {
//       container.removeEventListener('scroll', checkEnd);
//       window.removeEventListener('resize', checkEnd);
//     };
//   }, []);

//   return (
//     <div className="w-full pt-10 min-h-screen bg-gray-50 p-1">
//       <ScrollWrapper ref={scrollRef}>
//         {/* শুধু মোবাইল/ট্যাবে হিন্ট দেখাবে */}
//         {typeof window !== 'undefined' && window.innerWidth < 1024 && (
//           <MobileHint>Scroll Here →</MobileHint>
//         )}

//         <Tree
//           lineWidth={'2px'}
//           lineColor={'#F87171'}
//           lineBorderRadius={'5px'}
//           label={<RootNode>Betopia Limited</RootNode>}
//         >
//           <TreeNode label={<MDNode>Managing Director</MDNode>}>
//             <TreeNode label={<TeamNode>Technology Team</TeamNode>}>
//               <TreeNode label={<SubNode>Enterprise</SubNode>}>
//                 <TreeNode label={<TextNode>Identify and Modern Works</TextNode>} />
//                 <TreeNode label={<TextNode>Hybrid cloud /infrastructure</TextNode>} />
//                 <TreeNode label={<TextNode>Cyber-Security</TextNode>} />
//                 <TreeNode label={<TextNode>Data & AI</TextNode>} />
//               </TreeNode>
//               <TreeNode label={<SubNode>Product</SubNode>} />
//             </TreeNode>

//             <TreeNode label={<TeamNode>Business Development Team</TeamNode>}>
//               <TreeNode label={<SubNode>Local</SubNode>}>
//                 <TreeNode label={<TextNode>FSI</TextNode>} />
//                 <TreeNode label={<TextNode>NGO & Helthcare</TextNode>} />
//                 <TreeNode label={<TextNode>Congla Heritage</TextNode>} />
//                 <TreeNode label={<TextNode>Government</TextNode>} />
//                 <TreeNode label={<TextNode>Manufacturer</TextNode>} />
//               </TreeNode>
//               <TreeNode label={<SubNode>International</SubNode>}>
//                 <TreeNode label={<SmallNode>Country-wise SBU</SmallNode>} />
//                 <TreeNode label={<SmallNode>Market Place</SmallNode>}>
//                   <TreeNode label={<TextNode>UpWork</TextNode>} />
//                   <TreeNode label={<TextNode>Fiverr</TextNode>} />
//                 </TreeNode>
//               </TreeNode>
//             </TreeNode>

//             <TreeNode label={<TeamNode>Operation Team</TeamNode>}>
//               <TreeNode label={<SmallNode>Sales Operation</SmallNode>} />
//               <TreeNode label={<SmallNode>OEM Management</SmallNode>} />
//               <TreeNode label={<SmallNode>Project Management</SmallNode>} />
//               <TreeNode label={<SmallNode>Tender & Proposal Management</SmallNode>} />
//             </TreeNode>

//             <TreeNode label={<TeamNode>Backend Team</TeamNode>}>
//               <TreeNode label={<SmallNode>Accounts</SmallNode>} />
//               <TreeNode label={<SmallNode>Finance</SmallNode>} />
//               <TreeNode label={<SmallNode>HR</SmallNode>} />
//               <TreeNode label={<SmallNode>Admin</SmallNode>} />
//             </TreeNode>

//             <TreeNode label={<TeamNode>Data Center Service</TeamNode>}>
//               <TreeNode label={<SmallNode>Data Center</SmallNode>} />
//               <TreeNode label={<SmallNode>Zenex Cloud</SmallNode>} />
//             </TreeNode>
//           </TreeNode>
//         </Tree>
//       </ScrollWrapper>
//     </div>
//   );
// };

// export default OrganizationChart;