document.querySelectorAll('.post-caption').forEach(caption => {
    const moreLink = caption.querySelector('.more-link');
    const captionText = caption.querySelector('.caption-text');

    moreLink.addEventListener('click', (e) => {
        e.preventDefault();
        const isExpanded = captionText.classList.toggle('expanded');
        moreLink.textContent = isExpanded ? 'less' : 'more';
    });
});