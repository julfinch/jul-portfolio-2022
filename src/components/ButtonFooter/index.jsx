import React from "react";
import "./style.scss";

export default function ButtonFooter({text}) {
  return (
        <div className="button-footer">
          <div className="content__item">
            <button class="button-1 button--calypso">
              <span>{text}</span>
            </button>
          </div>
        </div>
  );
}

