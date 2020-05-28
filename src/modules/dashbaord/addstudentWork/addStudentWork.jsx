import React from "react";
import "./addStudentWork.scss";
import ListIcon from "@material-ui/icons/List";

const AddStudentWork = () => {
  //dummy data of projects
  const firstYearProjectsList = [
    {
      projectName: "A",
    },
    {
      projectName: "B",
    },
    {
      projectName: "C",
    },
  ];

  const secondYearProjectsList = [
    {
      projectName: "A",
    },
    {
      projectName: "B",
    },
    {
      projectName: "C",
    },
  ];

  const thirdYearProjectsList = [
    {
      projectName: "A",
    },
    {
      projectName: "B",
    },
    {
      projectName: "C",
    },
  ];

  const finalYearProjectsList = [
    {
      projectName: "A",
    },
    {
      projectName: "B",
    },
    {
      projectName: "C",
    },
  ];

  return (
    <div className="addStudentWorkContainer">
      <div className="blocksContainer">
        <div className="blocks">
          <div className="projectCategoryIcon">
            <ListIcon className="listIcon" />
          </div>
          <div className="projectCategoryNameAndCount">
            <div className="projectCategoryName">All Projects</div>
            <div className="projectCategoryProjectCount">
              {firstYearProjectsList.length +
                secondYearProjectsList.length +
                thirdYearProjectsList.length +
                finalYearProjectsList.length}
            </div>
          </div>
        </div>
        <div className="blocks">
          <div className="projectCategoryIcon">
            <ListIcon className="listIcon" />
          </div>
          <div className="projectCategoryNameAndCount">
            <div className="projectCategoryName">First Year Projects</div>
            <div className="projectCategoryProjectCount">
              {firstYearProjectsList.length}
            </div>
          </div>
        </div>
        <div className="blocks">
          <div className="projectCategoryIcon">
            <ListIcon className="listIcon" />
          </div>
          <div className="projectCategoryNameAndCount">
            <div className="projectCategoryName">Second Year Projects</div>
            <div className="projectCategoryProjectCount">
              {secondYearProjectsList.length}
            </div>
          </div>
        </div>
        <div className="blocks">
          <div className="projectCategoryIcon">
            <ListIcon className="listIcon" />
          </div>
          <div className="projectCategoryNameAndCount">
            <div className="projectCategoryName">Third Year Projects</div>
            <div className="projectCategoryProjectCount">
              {thirdYearProjectsList.length}
            </div>
          </div>
        </div>
        <div className="blocks">
          <div className="projectCategoryIcon">
            <ListIcon className="listIcon" />
          </div>
          <div className="projectCategoryNameAndCount">
            <div className="projectCategoryName">Final Year Projects</div>
            <div className="projectCategoryProjectCount">
              {finalYearProjectsList.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudentWork;
