// Enter your JavaScript for the solution here...

//To put image in the proper Area when the previews are clicked.

var imagePreview = document.querySelector ('ul.thumbnails');
var addTag = document.querySelector('form');
var preview;

function imagePreviewHandler (evt){
	var previewTitle = document.querySelector('h2.title');
	preview = evt.target;
	previewArea = document.querySelector('.editor img');

	previewTitle.innerHTML = preview.title; 
	previewArea.src = preview.src.replace('_thumb','');
	previewArea.alt = preview.alt;
	previewArea.title = preview.title;

	if(preview.dataset.tags != ' '){
		document.querySelector('p.tags').innerHTML= preview.dataset.tags;
	} else{
		document.querySelector('p.tags').innerHTML=' ';
	}
	
}

function addTagHandler (evt) {
	var submit = evt.target;
	var tag = submit.elements.tag;
	var error = document.querySelector('p.error');
    
	if (tag.value.trim() != '' && tag.value.split(' ').length < 2) {
		document.querySelector('p.tags').innerHTML += '#' + tag.value; 
		preview.dataset.tags += '#'+ tag.value + ' '  ; 
		tag.value = '';
		error.classList.add ('hidden');
	} else if (tag.value.split(' ').length >=2){
		error.classList.remove('hidden');
		error.innerHTML = 'Tags cannot have spaces.';
	} else {
		error.classList.remove('hidden');
		error.innerHTML = 'Tag submitted is empty.';
	}

	 evt.preventDefault();

}


imagePreview.addEventListener('click',imagePreviewHandler);
addTag.addEventListener('submit',addTagHandler);