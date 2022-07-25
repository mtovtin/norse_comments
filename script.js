let id = 1;
  let helpingCounter = 1;
  function reply(id) {
    let id1 = id;
    const el17 = document.createElement('div');
    el17.classList.add('newComment');
    const el18 = document.createElement('img');
    el18.src = './images/avatars/image-juliusomo.webp'
    el18.classList.add('currUserAvatar');
    const el19 = document.createElement('textarea');
    el19.cols = "30";
    el19.rows = "10";
    el19.type = "text"
    el19.placeholder = "Add a comment..."
    el19.classList.add('textArea');
    el19.id = 'textArea'
    const el21 = document.createElement('button');
    el21.classList.add('addCommButton');
    el21.id = 'addElButton';
    el21.textContent = 'Reply'
    el21.onclick = function () {
    const el = document.createElement('div');
    el.classList.add('finishedComment');
    el.classList.add('finishedSubcomment');
      const el2 = document.createElement('div');
      el2.classList.add('commentLike');
      const el3 = document.createElement('span');
      el3.classList.add('commentLikeSpan');
      const el4 = document.createElement('img');
      el4.src = './images/icon-plus.svg'
      const el5 = document.createElement('span');
      el5.classList.add('commentLikeCounter');
      el5.textContent = '0'
      el5.id = `${id1}${helpingCounter}`;
      el3.onclick = function (id) {
        document.getElementById(el5.id).innerHTML = Number(document.getElementById(el5.id).innerHTML) + 1;
      }
      const el20 = document.createElement('span');
      el20.onclick = function (id) {
        if (document.getElementById(el5.id).innerHTML == '0') {} else document.getElementById(el5.id).innerHTML =
          Number(document.getElementById(el5.id).innerHTML) - 1;
      }
      const el6 = document.createElement('img');
      el6.src = "./images/icon-minus.svg"
      const el7 = document.createElement('div');
      el7.classList.add('commentContent');
      const el8 = document.createElement('div');
      el8.classList.add('commentHeader');
      const el9 = document.createElement('div');
      el9.classList.add('commentUser');
      el9.classList.add('newCommentUser');
      const el10 = document.createElement('img');
      el10.classList.add('commentAvatar');
      el10.src = "./images/avatars/image-juliusomo.webp"
      const el11 = document.createElement('span');
      el11.textContent = "juliusomo"
      el11.classList.add('currentUsername')
      const el12 = document.createElement('span');
      el12.classList.add('commentDate');
      el12.textContent = "now"
      const el13 = document.createElement('div');
      el13.classList.add('commentText');
      el13.innerHTML = document.getElementById("textArea").value;
      const el14 = document.createElement('div');
      const el15 = document.createElement('img');
      el15.src = "./images/icon-delete.svg"
      const el16 = document.createElement('span');
      el16.textContent = " Delete";
      el16.style.color = 'hsl(238, 40%, 52%)';
      el16.classList.add('deleteButton');
      el16.onclick = function () {
        if (confirm("Delete?"))
          el.remove();
      };

      el15.style.marginLeft = '-110px';
      el16.style.display = 'inline-block';
      el16.style.marginLeft = '-100px'

      const el31 = document.createElement('img');
      el31.src = "./images/icon-edit.svg"
      el31.style.marginLeft = '10px'
      const el30 = document.createElement('span');
      el30.textContent = "  Edit"
      el14.classList.add('editButton');
      el30.style.color = 'hsl(238, 40%, 52%)';
      const elte = document.createElement('div');
      el30.onclick = function () {
        const elta = document.createElement('textarea');
        elta.classList.add('textArea');
        elta.classList.add('textArea1');

        const elbu = document.createElement('button');
        elbu.textContent = "UPDATE";

        elbu.classList.add('updateButton')
        elbu.classList.add('addCommButton');
        el13.parentNode.appendChild(elta);
        elta.parentNode.appendChild(elbu);
        elta.classList.add('commentText');
        elbu.onclick = function () {
          elte.textContent = elta.value;
          elte.style.color = 'grey';
          elte.classList.add('commentText');
          elta.parentNode.replaceChild(elte, elta);
          el13.textContent = '';
          elbu.remove();
        }
      };
      el14.appendChild(el16);
      el14.appendChild(el31);
      el14.appendChild(el30);
      el14.appendChild(el15);
      el9.appendChild(el10);
      el9.appendChild(el11);
      el9.appendChild(el12);
      el8.appendChild(el9);
      el7.appendChild(el8);
      el7.appendChild(el13);
      el3.appendChild(el4);
      el20.appendChild(el6);
      el2.appendChild(el3);
      el2.appendChild(el5);
      el2.appendChild(el20);
      el.appendChild(el2);
      el.appendChild(el7);
      el.appendChild(el14);

      const elDiv1 = document.createElement('div');
      elDiv1.id = `div${id}`;
      el.id = `comment${id}`
      id += 1;
      elDiv1.appendChild(el);
      el17.remove();
      document.getElementById(id1).appendChild(elDiv1);
      document.getElementById("textArea").value = "";
    };
    el17.appendChild(el18);
    el17.appendChild(el19);
    el17.appendChild(el21);

    document.getElementById(id).appendChild(el17);
    helpingCounter++;
  }

const main = document.getElementById('comments');
const elem = document.getElementById('addElButton');
  elem.onclick = function () {
    const el = document.createElement('div');
    el.classList.add('finishedComment');

    const el2 = document.createElement('div');
    el2.classList.add('commentLike');
    const el3 = document.createElement('span');
    el3.classList.add('commentLikeSpan');
    const el4 = document.createElement('img');
    el4.src = './images/icon-plus.svg'
    const el5 = document.createElement('span');
    el5.classList.add('commentLikeCounter');
    el5.textContent = '0'
    el5.id = id;
    el3.onclick = function (id) {
      document.getElementById(el5.id).innerHTML = Number(document.getElementById(el5.id).innerHTML) + 1;
    }
    const el20 = document.createElement('span');
    el20.onclick = function (id) {
      if (document.getElementById(el5.id).innerHTML == '0') {} else document.getElementById(el5.id).innerHTML =
        Number(document.getElementById(el5.id).innerHTML) - 1;
    }

    const el6 = document.createElement('img');
    el6.src = "./images/icon-minus.svg"
    const el7 = document.createElement('div');
    el7.classList.add('commentContent');
    const el8 = document.createElement('div');
    el8.classList.add('commentHeader');
    const el9 = document.createElement('div');
    el9.classList.add('commentUser');
    el9.classList.add('newCommentUser');
    const el10 = document.createElement('img');
    el10.classList.add('commentAvatar');
    el10.src = "./images/avatars/image-juliusomo.webp"
    const el11 = document.createElement('span');
    el11.textContent = "juliusomo"
    el11.classList.add('currentUsername');
    const el12 = document.createElement('span');
    el12.classList.add('comment_date');
    el12.textContent = "now";
    el12.style.color='grey';
    const el13 = document.createElement('div');
    el13.classList.add('commentText');
    el13.innerHTML = document.getElementById("textArea").value;
    const el14 = document.createElement('div');
    el14.style.color = 'hsl(238, 40%, 52%)';
    el14.classList.add('editButton');
    const el15 = document.createElement('img');
    el15.src = "./images/icon-delete.svg"
    const el16 = document.createElement('span');
    el16.textContent = " Delete"
    el16.onclick = function () {
      if (confirm("Delete?"))
        el.remove();
    };

    el15.style.marginLeft = '-110px';
    el16.style.display = 'inline-block';
    el16.style.marginLeft = '-100px'

    const el31 = document.createElement('img');
    el31.src = "./images/icon-edit.svg"
    el31.style.marginLeft = '10px'
    const el30 = document.createElement('span');
    el30.textContent = "  Edit"
    el14.style.paddingTop = '-40px';
    const elte = document.createElement('div');
    el30.onclick = function () {
      el14.style.paddingTop = '85px';
      const elta = document.createElement('textarea');
      elta.classList.add('textArea');
      elta.classList.add('textArea1');

      const elbu = document.createElement('button');
      elbu.textContent = "UPDATE";

      elbu.classList.add('addCommButton');
      el13.parentNode.appendChild(elta);
      elta.parentNode.appendChild(elbu);
      elta.classList.add('commentText');

      elbu.onclick = function () {
        el14.style.paddingTop = '0px';
        elte.textContent = elta.value;
        elte.style.color = 'grey';
        elte.classList.add('commentText');
        elta.parentNode.replaceChild(elte, elta);
        el13.textContent = '';
        elbu.remove();
      }
    };

    el14.appendChild(el16);
    el14.appendChild(el31);
    el14.appendChild(el30);
    el14.appendChild(el15);
    el9.appendChild(el10);
    el9.appendChild(el11);
    el9.appendChild(el12);
    el8.appendChild(el9);
    el7.appendChild(el8);
    el7.appendChild(el13);
    el3.appendChild(el4);
    el20.appendChild(el6);
    el2.appendChild(el3);
    el2.appendChild(el5);
    el2.appendChild(el20);
    el.appendChild(el2);
    el.appendChild(el7);
    el.appendChild(el14);
    const elDiv = document.createElement('div');
    elDiv.id = `div${id}`;
    el.id = `comment${id}`
    id += 1;
    main.appendChild(el);
    main.appendChild(elDiv);
    document.getElementById("textArea").value = "";
  };

  function like(id) {
    document.getElementById(id).innerHTML = Number(document.getElementById(id).innerHTML) + 1;
  }

  function dislike(id) {
    if (document.getElementById(id).innerHTML == '0') {} else
      document.getElementById(id).innerHTML = Number(document.getElementById(id).innerHTML) - 1;
  }