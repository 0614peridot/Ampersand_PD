import MemberCard from './MemberCard'
import { members, goalText } from '@/data/members'

export default function MembersSection() {
  return (
    <section className="members-section">
      <div className="members-content">
        <div className="members-header">
          <div className="members-text">
            <h2 className="members-title">프로덕트 디자인 부원</h2>
            <div className="members-desc">
              <p>부원 목록을 관리하고, 학습 목표를 리마인드하세요.</p>
              <p>부원이 작성한 기록을 참고해 학회의 커리큘럼을 조정하세요.</p>
            </div>
          </div>
          <div className="members-actions">
            <button className="search-btn" aria-label="검색">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="10" r="6" stroke="#737373" strokeWidth="2" />
                <line x1="15.5" y1="14.5" x2="20" y2="19" stroke="#737373" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <button className="btn btn-dark">부원 추가</button>
          </div>
        </div>

        <div className="card-list">
          {members.map((member, i) => (
            <MemberCard
              key={i}
              name={member.name}
              tags={member.tags}
              goalText={goalText}
            />
          ))}
        </div>

        <button className="cta-btn cta-black">과제 제출: 3/21(토) 22:00까지</button>
      </div>
    </section>
  )
}
