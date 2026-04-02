function EditIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2 1.4-1.4a1.92 1.92 0 0 1 1.413-.577 1.92 1.92 0 0 1 1.412.577l1.4 1.4c.383.383.583.846.6 1.388a1.806 1.806 0 0 1-.55 1.387L19.3 8.925ZM4 21a.967.967 0 0 1-.712-.288A.968.968 0 0 1 3 20v-2.825a.98.98 0 0 1 .075-.387.946.946 0 0 1 .225-.338l12.15-12.15 4.25 4.25-12.15 12.15a.946.946 0 0 1-.338.225.98.98 0 0 1-.387.075H4Z"
        fill="#DCDCDC"
      />
    </svg>
  )
}

export default function MemberCard({ name, tags, goalText }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-top">
          <div className="card-name-row">
            <span className="card-name">{name}</span>
            <button className="detail-btn" aria-label="더보기">
              <div className="detail-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
          <div className="tag-list">
            {tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="card-divider"></div>
        <div className="card-goal">
          <div className="card-goal-header">
            <span className="card-goal-title">학습 목표</span>
            <button className="edit-btn" aria-label="수정">
              <EditIcon />
            </button>
          </div>
          <p className="card-goal-text">{goalText}</p>
        </div>
      </div>
    </div>
  )
}
