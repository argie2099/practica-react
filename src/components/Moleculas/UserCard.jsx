import React from 'react';

const UserCard = ({name, mail}) => {
    return (
        <>
        <article class="card">
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 class="t5 s-mb-2 s-center">
            {name}
          </h3>
          <div class="s-mb-2 s-main-center">
            <div class="card__teacher s-cross-center">
              <span class="small">{mail}</span>
            </div>
          </div>
        </div>
      </article>
      </>
    );
}
 
export default UserCard;